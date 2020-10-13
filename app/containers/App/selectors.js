import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectGlobal = state => state.global || initialState;




export const getKind = (state) => state.global.kind;

export const getDate = (state) => state.global.date;

export const getEvents = (state) => state.global.events;

export const getDashboardEvents = (state) => state.global.dashboardevents;

export const getId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.id,
  );

export const getKindd = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.kind,
  );


export const getFilterDashboardEvents = () => createSelector(
  getKind, getDate, getDashboardEvents, getEvents,
  (kind, date, dashboardEvents, events) => {
    if (kind === "allkinds" && date === "null")
      return dashboardEvents;
    if (kind !== "allkinds" && date === "null")
      return dashboardEvents.filter((dashEvent) => dashEvent.name === kind)
    if (date !== "null") {
      const { length } = dashboardEvents;
      const dashboardevents = dashboardEvents;
      const dashEvents = [...dashboardEvents];
      for (let index = 0; index < length; index += 1) {
        const countEvents = events.filter((event) =>
          event.date === date && event.kind === dashboardevents[index].name).length;

        dashEvents[index].count = countEvents;
      }
      if (kind === "allkinds")
        return dashboardevents.filter((dashEvent) => dashEvent.name === kind);
      return dashboardevents;
    }
    return dashboardEvents;
  }
);


export const getFilterEvents = () => createSelector(
  getKind, getDate, getEvents,
  (kind, date, events) => {
    if (kind === "allkinds" && date === "null") {
      return events;
    }

    if (kind !== "allkinds") {
      return events.filter((event) => (event.kind === kind));
    }
    if (date !== "null") {
      return events.filter((event) => (event.date === date));
    }
    return events.filter((event) => (event.date === date && event.kind === kind));
  }
);






