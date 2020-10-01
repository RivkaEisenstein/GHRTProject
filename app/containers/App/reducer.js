import produce from 'immer';
import { UPDATE_DATE, UPDATE_KIND } from '../Navbar/constants';
import { ADD_EVENT } from '../AddEvent/constants';
import { UPDATE_EDITEVENT } from '../Calendar/constants';
import { EDIT_EVENT } from '../EditEvent/constants';

// The initial state of the App
export const initialState = {
  events: [],
  date: "null",
  kind: 'allkinds',
  eventedit: { name: 'hello' },
  id:3,
  dashboardevents:[
    {name:"wedding",count:0},
    {name:"birthday",count:0},
    {name:"meeting",count:0}
  ]
};


const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_EVENT:
        draft.id+= 1;
        draft.events.push(action.ob);
        const i =draft.dashboardevents.findIndex((eventd)=>
          eventd.name===action.ob.kind
        );
        if(draft.date==="null" || draft.date === action.ob.date)
        {
          draft.dashboardevents[i].count+=1;
        }
       
        break;

      case UPDATE_DATE:
        draft.date = action.ob;
        const {length} = draft.dashboardevents;
        for (let index = 0; index < length;index +=1) {
          const countEvents = draft.events.filter((event) => 
            event.date === action.ob && event.kind === draft.dashboardevents[index].name).length;
          if(countEvents===undefined)
            draft.dashboardevents[index].count=0;
          else  draft.dashboardevents[index].count=countEvents;
        };
        break;

      case UPDATE_KIND:
        draft.kind = action.ob;
        break;

      case UPDATE_EDITEVENT:
        draft.eventedit = action.ob;
        break;

      case EDIT_EVENT:
        const index=draft.events.findIndex((event)=>
          event.id===action.ob.id
        );
        draft.events[index].title=action.ob.title;
        draft.events[index].time=action.ob.time;
        draft.events[index].date=action.ob.date;
        break;
      default: break;

    }
  });

export default appReducer;
