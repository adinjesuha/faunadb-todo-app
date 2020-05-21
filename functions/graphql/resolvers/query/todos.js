const { client, q } = require('../../faunabd');

const todos = async ( parent, args, { user }) => {
  if(!user){
    return [];
  }else {
    const results = await client.query(
      q.Paginate(q.Match(q.Index("todos_by_user"), user))
    )
    return results.data.map(([ref, text, done]) => ({
      id: ref.id,
      text,
      done
    }))
  }
};

module.exports = todos;