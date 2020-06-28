require('isomorphic-fetch');

const React = require('react');
const {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} = require("@apollo/client");
const { setContext } = require("apollo-link-context");
const netlifyIdentity = require("netlify-identity-widget");

const { ThemeProvider } = require('theme-ui');
const { deep } = require('@theme-ui/presets');

const { Provider } = require('./identity-context');

const tokens = {
  ...deep,
  sizes: { 
    container: 1024 
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
}

const authLink = setContext((_, { headers }) => {
  const user = netlifyIdentity.currentUser();
  const userToken = user.token.access_token;

  return {
    headers: {
      ...headers,
      Authorization: userToken ? `Bearer ${userToken}` : ""
    }
  };
});

const httpLink = new HttpLink({
  uri: "/.netlify/functions/graphql"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

module.exports = ({ element }) => (
  <Provider>
    <ApolloProvider client={client}>
      <ThemeProvider theme={tokens}>{element}</ThemeProvider>
    </ApolloProvider>
  </Provider>
);
