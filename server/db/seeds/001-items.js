'use strict'

exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        {id: 1, name: 'Widget', durability: 0, enhancement: 10},
        {id: 2, name: 'Doodad', durability: 35, enhancement: 18},
        {id: 3, name: 'Thingamajig', durability: 100, enhancement: 20}
      ]);
    });
};
