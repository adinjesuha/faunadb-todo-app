import React from 'react';
import { Heading, Flex, Box } from 'theme-ui';

import Layout from '../components/layout';
import FaunaDB from '../images/fauna_db.png';
import Netlify from '../images/netlify.png';

export default () => {
  return (
    <Layout>
      <Box
        sx={{
          my: "80px",
          textAlign: 'center'
        }}
      >
        <Heading 
          as="h1" 
          sx={{
            fontSize: [5,6],
          }}
        >
          Serverless Todo App with Netlify Functions and FaunaDB
        </Heading>
      </Box>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%"
        }}
      >
        <Box
          sx={{
            width: "300px"
          }}
        >
          <img src={FaunaDB} alt="FaunDB" width="100%"/>
        </Box>
        <Box
          sx={{
            width: "300px"
          }}
        >
          <img src={Netlify} alt="Netlify" width="100%"/>
        </Box>
      </Flex>
    </Layout>
  )
}