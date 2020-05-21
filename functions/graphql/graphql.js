// src/lambda/graphql.js
const { ApolloServer } = require("apollo-server-lambda");

 const typeDefs = require('./typeDefs.js');
 const resolvers = require('./resolvers');
 
 const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: ({ context }) => {
     if (context.clientContext.user){
       return { user: context.clientContext.user.sub }
     }else {
       return {};
     }
   },
 });
 
 exports.handler = server.createHandler();