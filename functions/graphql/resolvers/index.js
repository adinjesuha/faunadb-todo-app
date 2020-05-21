const todos = require('./query/todos');
const addTodo = require('./mutation/addTodo');
const updateTodoDone = require('./mutation/updateTodo');

const resolvers = {
  Query: {
    todos,
  },
  Mutation: {
    addTodo,
    updateTodoDone
  }
};

module.exports = resolvers;