 // src/lambda/graphql.js
 const { ApolloServer, gql } = require("apollo-server-lambda");

 const typeDefs = require('./typeDefs.js');
 const resolvers = require('./resolvers');
 
 const server = new ApolloServer({
   typeDefs,
   resolvers,
 });
 
 exports.handler = server.createHandler();