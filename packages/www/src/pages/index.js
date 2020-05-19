import React from 'react'
import { Container, Heading, Button, Flex  } from 'theme-ui'

export default props => (
  <Container>
  <Flex sx={{flexDirection: "column", padding: 3}}>
    <Heading as="h1">Hello world!!</Heading>
     <Button 
      sx={{ marginTop: 2}}
      onClick={() => console.log('click')}
    >Log in</Button>
  </Flex>
  </Container>
)