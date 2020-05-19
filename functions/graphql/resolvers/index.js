const todos = require('./query/todos');

const resolvers = {
  Query: {
    todos,
  }
};

module.exports = resolvers;