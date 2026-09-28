function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

function unique(items) {
  return [...new Set(items)];
}

module.exports = { sum, average, unique };
