import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Flex, NavLink, Box, Button, Styled } from 'theme-ui';
import { IdentityContext } from '../../identity-context';

export default () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);
  return (
    <Flex 
      as="nav"
      sx={{
        my: "10px",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <NavLink as={Link} to="/" p={2}>Home</NavLink>
        <NavLink as={Link} to={"/app"} p={2}>Dashboard</NavLink>
        <Styled.a 
          href="https://github.com/adinjesuha/faunadb-todo-app" 
          target="_blank"
          rel="noopener"
          p={2}
        >
          Source
          <Box
            as="svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="link"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            pl="5px"
            mt="4px"
            sx={{
              display: 'inline-block',
              width: '1.5em',
              fontSize: '22px',
              verticalAlign: 'middle',
            }}
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </Box>
        </Styled.a>
      </Box>
      <Box>
        <Button
          onClick={() => {
            user ? netlifyIdentity.logout() : netlifyIdentity.open()
          }}
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >{user ? "Log out" : "Log in"}</Button>
      </Box>
    </Flex>
  )
}
