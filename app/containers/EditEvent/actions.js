/*
 *
 * EditEvent actions
 *
 */

import { EDIT_EVENT } from './constants';

export function Edit(ob) {
  console.log(ob);
  return {
   
    type: EDIT_EVENT,
    ob
  };
}
