function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAdult(age) {
  return age > 18;
}

function chunk(items, size) {
  const result = [];
  let i = 0;
  while (i < items.length) {
    result.push(items.slice(i, i + size));
    i += size;
  }
  return result;
}

module.exports = { isValidEmail, isAdult, chunk };
