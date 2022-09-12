/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */

import { baseProducts } from '../fakers/product';

exports.seed = async function (knex) {
  await Promise.all([
    knex('products').del(),
    knex('products').insert(baseProducts),
  ]);
};
