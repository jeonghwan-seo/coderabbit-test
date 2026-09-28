const { findUserByName } = require('./db');

async function notifyUsers(names) {
  const results = [];
  names.forEach(async (name) => {
    const user = await findUserByName(name);
    results.push(user);
  });
  return results;
}

module.exports = { notifyUsers };
