/**
 * Define functions
 */

function succeed(item) {
  if (item.enhancement < 20 && item.enhancement > 0) {
    return Object.assign({}, item, { enhancement: item.enhancement + 1 })
  } else if (item.enhancement < 0) {
    return Object.assign({}, item, { enhancement: 0 })
  } else {
    return { ...item }
  }
}

function fail(item) {
  return Object.assign({}, item)
}

function repair(item) {
  return Object.assign({}, item, { durability: 100 })
}

function get(item) {
  return Object.assign({}, item)
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
