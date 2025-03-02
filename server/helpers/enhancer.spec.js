'use strict'

/**
 * Dependencies
 */

const enhancer = require('./enhancer.js')

/**
 * Assertions
 */

describe("enhancer.js", () => {
  test("All methods return a new item", () => {
    const item = { name: 'Widget', durability: 35, enhancement: 5 }
    const succeed_item = enhancer.succeed(item)
    const fail_item = enhancer.fail(item)
    const repair_item = enhancer.repair(item)
    const get_item = enhancer.get(item)

    expect(item === succeed_item).toBeFalsy()
    expect(item === fail_item).toBeFalsy()
    expect(item === repair_item).toBeFalsy()
    expect(item === get_item).toBeFalsy()
  })

  describe("#succeed", () => {
    test("Returns item with enhancement incremented by 1", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 5 }
      let new_item = enhancer.succeed(item)
      expect(new_item.enhancement).toBe(6)

      new_item = enhancer.succeed(new_item)
      expect(new_item.enhancement).toBe(7)

      new_item = enhancer.succeed(new_item)
      expect(new_item.enhancement).toBe(8)
    })

    test("Returns max item enhancement of 20", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 20 }
      let new_item = enhancer.succeed(item)
      expect(new_item.enhancement).toBe(20)

      new_item = enhancer.succeed(item)
      expect(new_item.enhancement).toBe(20)

      new_item = enhancer.succeed(item)
      expect(new_item.enhancement).toBe(20)
    })

    test("Returns min item enhancement of 0", () => {
      const item = { name: 'Widget', durability: 35, enhancement: -5 }
      let new_item = enhancer.succeed(item)

      expect(new_item.enhancement).toBe(0)
    })

    test("Returns min item durability of 0", () => {
      const item = { name: 'Widget', durability: -5, enhancement: 15 }
      let new_item = enhancer.succeed(item)

      expect(new_item.durability).toBe(0)
    })

    test("Returns item with unchanged durability", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 20 }
      let new_item = enhancer.succeed(item)

      expect(new_item.durability).toBe(35)

      new_item = enhancer.succeed(item)
      expect(new_item.durability).toBe(35)
    })
  })

  describe("#fail", () => {
    test("Returns item with durability minus 5 if enhancement less than 15", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 5 }
      let new_item = enhancer.fail(item)

      expect(new_item.durability).toBe(30)
    })

    test("Returns item with durability minus 10 if enhancement equal to or greater than 15", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 20 }
      let new_item = enhancer.fail(item)

      expect(new_item.durability).toBe(25)
    })

    test("Returns item with decreased enhancement by 1 if greater than 16", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 20 }
      let new_item = enhancer.fail(item)
      expect(new_item.enhancement).toBe(19)

      new_item = enhancer.fail(new_item)
      expect(new_item.enhancement).toBe(18)
      new_item = enhancer.fail(new_item)
      expect(new_item.enhancement).toBe(17)
      new_item = enhancer.fail(new_item)
      expect(new_item.enhancement).toBe(16)
      new_item = enhancer.fail(new_item)
      expect(new_item.enhancement).toBe(16)
    })
  })

  describe("#repair", () => {
    test("Returns item with durability set to 100", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 5 }
      const new_item = enhancer.repair(item)

      expect(new_item.durability).toBe(100)
    })
  })

  describe("#get", () => {
    test("Modifies name if enhancement greater than 0", () => {
      const item = { name: 'Widget', durability: 35, enhancement: 5 }
      const new_item = enhancer.get(item)

      expect(new_item.name).toBe("[+5] Widget")
    })
  })
})
