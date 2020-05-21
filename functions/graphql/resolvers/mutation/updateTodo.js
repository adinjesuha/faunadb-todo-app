import { client, q } from '../../faunabd';

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