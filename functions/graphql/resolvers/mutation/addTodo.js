const data = require('../../data');
let todoIndex = 0;

const addTodo = (_, { text }) => {
  todoIndex++;
  const id = `key-${todoIndex}`;
  data[id] = {id, text, done: false};
  return data[id];
}

module.exports = addTodo;