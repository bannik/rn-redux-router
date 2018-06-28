import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../lib/AppNavigator';
import InputReducers from './input.js';

const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const initialNavState = RootNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

const AppReducer = combineReducers({
  nav,
  InputReducers
});

export default AppReducer;
