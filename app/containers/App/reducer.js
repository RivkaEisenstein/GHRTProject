import produce from 'immer';
import { UPDATE_DATE, UPDATE_KIND } from './constants';
import { ADD_EVENT } from '../AddEvent/constants';
import { UPDATE_EDITEVENT } from '../Calendar/constants';
import { EDIT_EVENT } from '../EditEvent/constants';

// The initial state of the App
export const initialState = {
  events: [],
  date: "null",
  kind: 'allkinds',
  eventedit: { name: 'hello' },
  id:1
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_EVENT:
        draft.id= draft.id + 1;
        draft.events.push(action.ob);
        break;

      case UPDATE_DATE:
        draft.date = action.ob;
        break;

      case UPDATE_KIND:
        draft.kind = action.ob;
        break;

      case UPDATE_EDITEVENT:
        draft.eventedit = action.ob;
        break;

      case EDIT_EVENT:
        return {
          ...state,
          events: draft.events.map(todo => todo.id === action.ob.id ?
            { ...todo, todo: action.ob } :
            todo
          )
        };



    }
  });

export default appReducer;
