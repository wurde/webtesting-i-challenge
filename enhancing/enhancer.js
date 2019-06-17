/**
 * Define functions
 */

function succeed(item) {
  return Object.assign({}, item, { enhancement: item.enhancement + 1 })
}

function fail(item) {
  return { ...item }
}

function repair(item) {
  return Object.assign({}, item, { durability: 100 })
}

function get(item) {
  return { ...item }
}

/**
 * Export functions
 */

module.exports = {
  succeed,
  fail,
  repair,
  get,
}
