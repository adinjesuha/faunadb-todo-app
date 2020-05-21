const { client, q } = require('../../faunabd');

const addTodo = async (_, { text }, { user }) => {
  if(!user) {
    throw new Error("Must be authenticated to insert todos");
  }
  const results = await client.query(
    q.Create(q.Collection("todos"), {
      data: {
        text,
        done: false,
        owner: user
      }
    })
  );

  return {
    ...results.data,
    id: results.ref.id
  }
}

module.exports = addTodo;