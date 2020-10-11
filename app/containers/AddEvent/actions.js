/*
 *
 * AddEvent actions
 *
 */

import { ADD_EVENT } from './constants';

export function Submit(event) {
  return {
    type: ADD_EVENT,
    event
  };
}


