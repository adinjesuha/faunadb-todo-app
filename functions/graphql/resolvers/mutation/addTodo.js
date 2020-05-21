const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: `${process.env.FAUNA_API_KEY}`
});

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