/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */

import { baseRoles } from '../fakers/roles';

exports.seed = async function (knex) {
  return Promise.all([knex('roles').del(), knex('roles').insert(baseRoles)]);
};
