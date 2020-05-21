const { client, q } = require('../../faunabd');

const updateTodoDone = async (_, { id }, { user }) => {
  if(!user) {
    throw new Error("Must be authenticated to insert todos");
  }
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