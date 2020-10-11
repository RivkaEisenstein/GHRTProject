/*
 *
 * Calendar actions
 *
 */

import { UPDATE_EDITEVENT } from './constants';

export function UpdateEdit(event) {
  return {
    type: UPDATE_EDITEVENT,
    event
  };
}
