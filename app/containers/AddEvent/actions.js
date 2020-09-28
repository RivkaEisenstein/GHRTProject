/*
 *
 * AddEvent actions
 *
 */

import { ADD_EVENT } from './constants';

export function Submit(ob) {
  return {
    type: ADD_EVENT,
    ob
  };
}

