const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: `${process.env.FAUNA_API_KEY}`
});

exports.q = q;
exports.client = client;