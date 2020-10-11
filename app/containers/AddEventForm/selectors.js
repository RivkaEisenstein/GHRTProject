import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addEventForm state domain
 */

const selectAddEventFormDomain = state => state.addEventForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddEventForm
 */

const makeSelectAddEventForm = () =>
  createSelector(
    selectAddEventFormDomain,
    substate => substate,
  );

export default makeSelectAddEventForm;
export { selectAddEventFormDomain };
