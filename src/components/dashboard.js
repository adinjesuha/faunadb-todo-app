import React, { useRef } from "react";
import {
  Box,
  Flex,
  Button,
  Input,
  Label,
  Checkbox,
  Spinner,
  Card,
  Grid
} from "theme-ui";
import { gql, useMutation, useQuery } from "@apollo/client";

import UserLoggedIn from './userLoggedIn'

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
    }
  }
`;

const UPDATE_TODO_DONE = gql`
  mutation UpdateTodoDone($id: ID!) {
    updateTodoDone(id: $id) {
      text
      done
    }
  }
`;

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      done
    }
  }
`;

export default () => {
  const inputRef = useRef();
  const [addTodo] = useMutation(ADD_TODO);
  const [updateTodoDone] = useMutation(UPDATE_TODO_DONE);
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  return(
    <Box
      my={4}
    >
      <UserLoggedIn />
      <Card
        sx={{
          padding: 4,
          borderRadius: 4,
          bg: 'muted'
        }}
      >
        <Box
          as="form"
          onSubmit={async e => {
            e.preventDefault();
            await addTodo({
              variables: { text: inputRef.current.value}
            });
            inputRef.current.value = "";
            console.log("refetching");
            await refetch();
          }}
        >
          <Label 
            htmlFor='username'
            sx={{
              marginBottom: 3,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            <span>Add Todo</span>
          </Label>
          <Input name='username' ref={inputRef} />
          <Button sx={{ marginLef: 1 }}>Submit</Button>
        </Box>
      </Card>
      <Flex sx={{ flexDirecion: "column" }}>
        {loading ? <Spinner /> : null}
        {error ? <div>{error.message}</div> : null}
        {!loading && !error && (
          <ul 
            style={{
              listStyleType: "none",
              margin: "0px",
              padding: "0px",
              paddingLeft: "10px",
              width: "100%"
            }}
          >
          {data.todos.map(todo => (
            <Flex 
              as="li"
              sx={{
                padding: 2,
                borderRadius: 4,
                bg: 'highlight',
                mb: 3
              }}
              key={todo.id}
              onClick={async () => {
                console.log("updateTodoDone");
                await updateTodoDone({ variables: { id: todo.id } });
                console.log("refetching");
                await refetch();
              }}
            >
              <Checkbox checked={todo.done} />
              <span>{todo.text}</span>
            </Flex>  
          ))}
          </ul>
        )}
      </Flex>
    </Box> 
  )
}

