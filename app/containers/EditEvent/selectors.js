import { createSelector } from 'reselect';
import { initialState } from '../App/reducer'; 



const selectGlobal = state => state.global || initialState;



const selectEditEvent = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.eventedit,
  );


export { selectEditEvent };
