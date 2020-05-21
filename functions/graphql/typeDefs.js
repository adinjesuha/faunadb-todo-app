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
  
  type Mutation {
    addTodo(text: String!): Todo
    updateTodoDone(id: ID!): Todo
  }

`;

module.exports = typeDefs;