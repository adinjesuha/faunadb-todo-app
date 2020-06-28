/** @jsx jsx */
import React from 'react';
import { Container } from 'theme-ui';
import { jsx } from 'theme-ui'

import Header from './header';

export default ({children}) => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100vh',
    }}
  >
    <Header />
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
        }}
      >
        {children}
      </div>
    </main>
  </Container>
)