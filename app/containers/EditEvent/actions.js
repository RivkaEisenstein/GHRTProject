/*
 *
 * EditEvent actions
 *
 */

import { EDIT_EVENT } from './constants';

export function Edit(ob) {
  alert("hello");
  return {
   
    type: EDIT_EVENT,
    ob
  };
}
