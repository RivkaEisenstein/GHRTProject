import { createSelector } from 'reselect';
import { initialState } from './reducer';
import React from 'react';

const selectGlobal = state => state.global || initialState;


export const getDate = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.date,
  );


export const getKind = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.kind,
  );

const getEvents = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.events,
  );

  
export const getId = () =>
createSelector(
  selectGlobal,
  globalState => globalState.id,
);


export const getFilterEvents = createSelector(
  getKind, getDate, getEvents,
  (kind, date, events) => {
    if (kind === "allkinds"  && date === "null")
      return events;
     else return events;
      
    // else return events.filter((event) => {
    //   return (event.date === date && event.kind === kind)
    // });
  }
);
    

   

