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
  UPDATE_EVENTT 
} from './constants';


// GET ORDER LIST
/**
 * Load the orders, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ORDER
 */
export function loadEvents() {
  return {
    type: LAOD_EVENT,
  };
}

/**
 * Dispatched when the orders are loaded by the request saga
 *
 * @param  {array} orders The ordersitory data
 *
 * @return {object}      An action object with a type of LOAD_ORDER_SUCCESS passing the orders
 */
export function eventsLoaded(events) {
  return {
    type: LOAD_EVENT_SUCCESS,
    events,
  };
}

/**
 * Dispatched when loading the orders fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ORDER_ERROR passing the error
 */
export function eventLoadingError(error) {
  return {
    type: LOAD_EVENT_ERROR,
    error,
  };
}

// GET SPECIFIC ORDER
export function getEvent(orderId) {
  return {
    type: GET_EVENT,
    orderId,
  };
}

export function getEventSuccess(order) {
  return {
    type: GET_EVENT_SUCCESS,
    order,
  };
}

export function getEventError(error) {
  return {
    type: GET_EVENT_ERROR,
    error,
  };
}

// UPDATE ORDER
// export function updateEvent(order) {
//   return {
//     type: UPDATE_EVENT,
//     order,
//   };
// }

export function updateEventSuccess(event, events) {
  return {
    type: UPDATE_EVENT_SUCCESS,
    event,
    events,
  };
}

export function updateEventError(error) {
  return {
    type: UPDATE_EVENT_ERROR,
    error,
  };
}

export function updateEventEdit(error) {
  return {
    type: UPDATE_EVENTT,
    error,
  };
}

// DELETE ORDER
export function deleteEvent(orderId) {
  return {
    type: DELETE_EVENT,
    orderId,
  };
}

export function deleteEventSuccess(orders) {
  return {
    type: DELETE_EVENT_SUCCESS,
    orders,
  };
}

export function deleteEventError(error) {
  return {
    type: DELETE_EVENT_ERROR,
    error,
  };
}


export function addEventSuccess(event, events) {
  return {
    type: ADD_EVENT_SUCCESS,
    event,
    events,
  };
}

export function addEventError(error) {
  return {
    type: ADD_EVENT_ERROR,
    error,
  };
}



