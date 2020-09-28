/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const MINUS_EVENT = 'boilerplate/App/MINUS_EVENT';
export const LOAD_EVENTS = 'boilerplate/App/LOAD_EVENTS';
export const UPDATE_DATE = 'boilerplate/App/UPDATE_DATE';
export const UPDATE_KIND = 'boilerplate/App/UPDATE_KIND';


