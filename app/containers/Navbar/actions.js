/*
 *
 * Navbar actions
 *
 */

import { UPDATE_DATE ,UPDATE_KIND } from './constants';


export function UpdateDate(ob) {
  return {
    type: UPDATE_DATE,
    ob
  };
}

export function Updatekind(ob) {
  return {
    type: UPDATE_KIND,
    ob
  };
}