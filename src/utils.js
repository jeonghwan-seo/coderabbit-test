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

function paginate(items, pageSize, pageNumber) {
  const start = pageNumber * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

module.exports = { sum, average, unique, paginate };
