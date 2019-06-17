/**
 * Define functions
 */

function succeed(item) {
  let new_item = Object.assign({}, item)

  new_item.enhancement = (new_item.enhancement < 0) ? 0 : new_item.enhancement + 1
  new_item.enhancement = (new_item.enhancement > 20) ? 20 : new_item.enhancement
  new_item.durability = (new_item.durability < 0) ? 0 : new_item.durability

  return new_item
}

function fail(item) {
  let new_item = Object.assign({}, item)

  new_item.durability = (new_item.enhancement < 15) ? new_item.durability - 5 : new_item.durability

  return new_item
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
