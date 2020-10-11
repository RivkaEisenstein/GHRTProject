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
  events:false,
  date: "null",
  kind: 'allkinds',
  eventedit: { name: 'hello' },
  id: 0,
  dashboardevents: [
    { name: "wedding", count: 0 },
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
        const i = draft.dashboardevents.findIndex((eventd) =>
          eventd.name === action.event.kind
        );
        alert(i);
        draft.dashboardevents[i].count += 1;
      

        break;

      case UPDATE_DATE:
        draft.date = action.ob;
        // const {length} = draft.dashboardevents;
        // for (let index = 0; index < length;index +=1) {
        //   const countEvents = draft.events.filter((event) => 
        //     event.date === action.ob && event.kind === draft.dashboardevents[index].name).length;
        //   if(countEvents===undefined)
        //     draft.dashboardevents[index].count=0;
        //   else  draft.dashboardevents[index].count=countEvents;
        // };
        break;

      case UPDATE_KIND:
        draft.kind = action.ob;
        break;

      case UPDATE_EDITEVENT:
        draft.eventedit = action.event;
        break;

      case UPDATE_EVENT_SUCCESS:
        const index = draft.events.findIndex((event) =>
          event.id === action.event.id
        );
        draft.events[index].title = action.event.title;
        draft.events[index].time = action.event.time;
        draft.events[index].date = action.event.date;
        break;
      case LAOD_EVENT:
        draft.loading = true;
        draft.error = false;
        draft.orders = false;
        break;

      case LOAD_EVENT_SUCCESS:
        draft.events = action.events;
        draft.id=action.events.length;
        draft.loading = false;
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
