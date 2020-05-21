import React, { useContext, useRef, useReducer } from "react";
import {
  Container,
  Flex,
  Button,
  NavLink,
  Input,
  Label,
  Checkbox,
} from "theme-ui";
import { Link } from "@reach/router";
import { useMutation, useQuery } from 'graphql-hooks';
import { IdentityContext } from "../../identity-context";

const ADD_TODO = `mutation AddTodo($text: String!) {
  addTodo(text: $text) {
    id
  }
}`

const UPDATE_TODO_DONE = `mutation UpdateTodoDone($id: ID!) {
  updateTodoDone(id: $id) {
    text
    done
  }
}`

const GET_TODOS = `query getTodos{
  todos {
    id
    text
    done
  }
}`

const todosReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [{ done: false, value: action.payload }, ...state];
    case "toggleTodoDone":
      const newState = [...state];
      newState[action.payload] = {
        done: !state[action.payload].done,
        value: state[action.payload].value
      };
      return newState;
    default:
      return state
  }
};

export default () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);
  const inputRef = useRef();
  const [ addTodo ] = useMutation(ADD_TODO);
  const [ updateTodoDone ] = useMutation(UPDATE_TODO_DONE);
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  return(
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>Home</NavLink>
        <NavLink as={Link} to={"/app"} p={2}>Dashboard</NavLink>
        {user && (
          <NavLink
            href="#!" 
            p={2}
            onClick={() => {
              netlifyIdentity.logout();
            }}
          >
            Log out {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <Flex
        as="form"
        onSubmit={async e => {
          e.preventDefault();
          await addTodo({variables: { text: inputRef.current.value }});
          inputRef.current.value = "";
          console.log("refetching");
          await refetch();
        }}
      >
        <Label sx={{ display: "flex" }}>
          <span>Add&nbsp;Todo</span>
          <Input ref={inputRef} sx={{ marginLeft: 1 }}/>
        </Label>
        <Button sx={{ marginLef: 1 }}>Submit</Button>
      </Flex>
      <Flex sx={{ flexDirecion: "column" }}>
        
        {loading ? <div>loading...</div> : null}
        {error ? <div>{error.message}</div> : null}
        {!loading && !error && (
          <ul sx={{ listStyleType: "none" }}>
          {data.todos.map(todo => (
            <Flex 
              as="li"
              key={todo.id}
              onClick={async () => {
                console.log("updateTodoDone")
                await updateTodoDone({variables: { id: todo.id } });
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
    </Container> 
  )
}

