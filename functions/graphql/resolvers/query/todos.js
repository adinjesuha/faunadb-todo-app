const todos = {};

const todosResolver = () => {
  return Object.values(todos);
};

module.exports = todosResolver;