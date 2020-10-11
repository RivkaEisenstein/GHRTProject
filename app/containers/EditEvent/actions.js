/*
 *
 * EditEvent actions
 *
 */

import { EDIT_EVENT } from './constants';

export function Edit(event) {
  console.log(event);
  return {
   
    type: EDIT_EVENT,
    event
  };
}
