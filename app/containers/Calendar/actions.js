/*
 *
 * Calendar actions
 *
 */

import { UPDATE_EDITEVENT } from './constants';

export function UpdateEdit(ob) {
  return {
    type: UPDATE_EDITEVENT,
    ob
  };
}
