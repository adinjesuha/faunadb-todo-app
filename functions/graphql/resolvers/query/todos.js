const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADsY8MhRACEx25fISZfariZAhhOupviBJMNYF4`
});



const todos = async () => {
  const results = await client.query(
    q.Paginate(q.Match(q.Index("todos_by_user"), ("user-test")))
  )
  return results.data.map(([ref, text, done]) => ({
    id: ref.id,
    text,
    done
  }))
};

module.exports = todos;