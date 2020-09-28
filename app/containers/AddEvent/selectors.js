import { createSelector } from 'reselect';
import { initialState } from '../App/reducer';

/**
 * Direct selector to the addEvent state domain
 */

export const selectAddEventDomain = state => state.id || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddEvent
 */


