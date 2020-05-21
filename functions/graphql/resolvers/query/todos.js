const data = require('../../data');

const todos = () => {
  return Object.values(data);
};

module.exports = todos;