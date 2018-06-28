import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger';
import { AppNavigator, middleware } from './src/lib/AppNavigator';
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__ });

const store = createStore(AppReducer, applyMiddleware(loggerMiddleware, thunk, middleware));

class ExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ExampleApp', () => ExampleApp);

export default ExampleApp;
