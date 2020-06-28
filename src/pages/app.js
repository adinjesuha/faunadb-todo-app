import React, { useContext } from 'react';
import { Router } from "@reach/router";
import { Heading, Box } from "theme-ui";
import { IdentityContext } from '../../identity-context';

import Layout from '../components/layout'
import Dashboard from '../components/dashboard'

const DashLoggedOut = props => {
  return(
    <Layout>
      <Box
        sx={{
          textAlign: "center",
          my: "80px"
        }}
      >
        <Heading 
          as="h1" 
          sx={{
            fontSize: [5,6]
          }}
        >
          Must be logged in to continue
        </Heading>
      </Box>
    </Layout>
  )
}

const DashLoggedIn = () => (
  <Layout>  
    <Dashboard />
  </Layout>
)

export default props => {
  const { user } = useContext(IdentityContext);
  if (!user) {
    return (
      <Router>
        <DashLoggedOut path="/app" />
      </Router>
    );
  }
  return (
    <Router>
      <DashLoggedIn path="/app" />
    </Router>
  )
}
