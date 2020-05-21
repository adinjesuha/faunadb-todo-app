const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADsY8MhRACEx25fISZfariZAhhOupviBJMNYF4`
});

const updateTodoDone = async (_, { id }) => {
  const results = await client.query(
    q.Update(q.Ref(q.Collection("todos"), id), {
      data: {
        done: true
      }
    })
  );
  return {
    ...results.data,
    id: results.ref.id
  }
}

module.exports = updateTodoDone;