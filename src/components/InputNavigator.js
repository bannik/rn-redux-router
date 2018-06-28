import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const InputNavigator = ({ dispatch }) => {
  return <Button onPress={() => dispatch(NavigationActions.navigate({ routeName: 'Input' }))} title="To the Input" />;
};

InputNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(InputNavigator);
