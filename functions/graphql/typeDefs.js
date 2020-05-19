const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

  type Query {
    todos: [Todo]!
  }

  type Todo {
    id: ID!
    text: String!
    done: Boolean!
  }

`;

module.exports = typeDefs;