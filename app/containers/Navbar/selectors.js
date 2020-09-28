import { createSelector } from 'reselect';
import { initialState } from '../App/reducer'; 



const selectGlobal = state => state.global || initialState;



const makeEvents = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.events,
  );


export { makeEvents };


