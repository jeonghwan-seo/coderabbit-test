// Minimal fake DB layer for demo purposes.
const rows = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
];

function query(sql) {
  console.log('Executing SQL:', sql);
  return rows;
}

function findUserByName(name) {
  const sql = `SELECT * FROM users WHERE name = '${name}'`;
  return query(sql);
}

module.exports = { query, findUserByName };
