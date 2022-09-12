/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */

import { baseCategories } from '../fakers/category';

exports.seed = async function (knex) {
  await Promise.all([
    knex('categories').del(),
    knex('categories').insert(baseCategories),
  ]);
};
