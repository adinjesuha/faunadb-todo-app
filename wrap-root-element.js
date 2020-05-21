require('isomorphic-fetch');

const React = require('react');
const { ThemeProvider } = require('theme-ui');
const { deep } = require('@theme-ui/presets');
const { GraphQLClient, ClientContext } = require('graphql-hooks');
const { Provider } = require('./identity-context');

const tokens = {
  ...deep,
  sizes: { container: 1024 }
}

const client = new GraphQLClient({
  url: '/.netlify/functions/graphql'
})

module.exports = ({ element }) => (
  <Provider>
    <ClientContext.Provider value={client}>
      <ThemeProvider theme={tokens}>{element}</ThemeProvider>
    </ClientContext.Provider>
  </Provider>
);
