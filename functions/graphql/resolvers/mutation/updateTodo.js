const data = require('../../data');

const updateTodoDone = (_, {id}) => {
  data[id].done = true;
  return data[id]
}

module.exports = updateTodoDone;