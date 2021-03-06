import produce from 'immer';
import { UPDATE_DATE, UPDATE_KIND } from '../Navbar/constants';
import { ADD_EVENT } from '../AddEvent/constants';
import { UPDATE_EDITEVENT } from '../Calendar/constants';

import {
  LAOD_EVENT,
  LOAD_EVENT_SUCCESS,
  LOAD_EVENT_ERROR,
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_ERROR,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  events: false,
  date: "null",
  kind: "allkinds",
  eventedit: { name: 'hello' },
  id: 0,
  dashboardevents: [
    { name: "weeding", count: 0 },
    { name: "birthday", count: 0 },
    { name: "meeting", count: 0 }
  ],
  loading: false,
  error: false,
};


const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_EVENT_SUCCESS:
        draft.id += 1;
        draft.events = action.events;
        draft.dashboardevents.find((eventDashboard) =>
          eventDashboard.name === action.event.kind
        ).count += 1;


        break;

      case UPDATE_DATE:
        draft.date = action.ob;
        break;

      case UPDATE_KIND:
        draft.kind = action.ob;
        break;

      case UPDATE_EDITEVENT:
        draft.eventedit = action.event;
        break;

      case UPDATE_EVENT_SUCCESS:
        draft.events = action.events;
        break;
      case LAOD_EVENT:
        draft.loading = true;
        draft.error = false;
        draft.orders = false;
        break;

      case LOAD_EVENT_SUCCESS:

        console.log(action.events);
        draft.events = action.events;
        console.log("draft events", draft.events);
        draft.id = action.events.length;
        draft.loading = false;
        draft.error = false;
        draft.dashboardevents[0].count = draft.events.filter((event) =>
          event.kind === draft.dashboardevents[0].name
        ).length;
        draft.dashboardevents[1].count = draft.events.filter((event) =>
          event.kind === draft.dashboardevents[1].name
        ).length;
        draft.dashboardevents[2].count = draft.events.filter((event) =>
          event.kind === draft.dashboardevents[2].name
        ).length;
        break;

      case GET_EVENT:
        draft.loading = true;
        draft.error = false;
        draft.currentOrder = false;
        break;

      case GET_EVENT_SUCCESS:
        draft.loading = false;
        draft.currentOrder = action.order;
        break;

      case DELETE_EVENT:
      case ADD_EVENT:
        draft.loading = true;
        draft.error = false;
        break;

      case DELETE_EVENT_SUCCESS:
        draft.loading = false;
        draft.orders = action.orders;
        draft.currentOrder = false;
        break;

      case GET_EVENT_ERROR:
      case UPDATE_EVENT_ERROR:
      case DELETE_EVENT_ERROR:
      case ADD_EVENT_ERROR:
      case LOAD_EVENT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      default: break;

    }
  });

export default appReducer;
