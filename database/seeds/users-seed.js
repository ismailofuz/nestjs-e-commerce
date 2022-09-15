/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */

const { baseUsers } = require('../fakers/users');

exports.seed = async function (knex) {
  return Promise.all([knex('users').del(), knex('users').insert(baseUsers)]);
};
