import { createSelector } from 'reselect';
import { initialState } from './reducer';
import React from 'react';

const selectGlobal = state => state.global || initialState;




export const getKind = (state) => {
  return state.global.kind;
};

export const getDate = (state) => {
  return state.global.date;
};

export const getEvents = (state) => {
  return state.global.events;
};

export const getDashboardEvents = (state) => {
  return state.global.dashboardevents;
};

export const getId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.id,
  );


export const getFilterDashboardEvents = () => createSelector(
  getKind, getDashboardEvents,
  (kind, dashboardEvents) => {

    if (kind === "allkinds")
      return dashboardEvents;
    return dashboardEvents.filter((dashEvent) => { return dashEvent.name === kind }
    )
  }

);


export const getFilterEvents = () => createSelector(
  getKind, getDate, getEvents,
  (kind, date, events) => {

    if (kind === "allkinds" && date === "null")
      return events;
    else if (kind !== "allkinds") {
      return events.filter((event) => {
        return (event.kind === kind)
      });
    }
    else if (date !== "null") {
      return events.filter((event) => {
        return (event.date === date)
      });
    }
    else return events.filter((event) => {
      return (event.date === date && event.kind === kind)
    });
  }
);






