/*
 *
 * Navbar actions
 *
 */

import { UPDATE_DATE } from './constants';

export function Update(ob) {
  return {
    type: UPDATE_DATE,
    ob
  };
}

import { UPDATE_KIND } from './constants';

export function Updatek(ob) {
  return {
    type: UPDATE_KIND,
    ob
  };
}