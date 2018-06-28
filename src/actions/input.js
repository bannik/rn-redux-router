import * as types from './types';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

export function setInput(text) {
  return {
    type: types.INPUT_MUTATION,
    text
  }
}

export function inputMutates(body){
  return (dispatch, getState) => {
    if(body.length != 0){
      dispatch(setInput(body));
      dispatch(NavigationActions.navigate({ routeName: 'Result' }))
    }
  }
}
