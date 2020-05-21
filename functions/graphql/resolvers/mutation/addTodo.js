import { client, q } from '../../faunabd';

const addTodo = async (_, { text }) => {
  const results = await client.query(
    q.Create(q.Collection("todos"), {
      data: {
        text,
        done: false,
        owner: "user-test"
      }
    })
  );

  return {
    ...results.data,
    id: results.ref.id
  }
}

module.exports = addTodo;