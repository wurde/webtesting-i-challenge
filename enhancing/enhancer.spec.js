'use strict'

/**
 * Dependencies
 */

const enhancer = require('./enhancer.js')

/**
 * Assertions
 */

describe("enhancer.js", () => {
  describe("#succeed", () => {
    test.todo("TODO")
  })

  describe("#fail", () => {
    test.todo("TODO")
  })

  describe("#repair", () => {
    test("Returns new item with durability set to 100", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 5 }
      const new_item = enhancer.repair(item)

      expect(new_item.durability).toBe(100)
    })
  })

  describe("#get", () => {
    test.todo("TODO")
  })
})
