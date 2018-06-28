import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Text, Button } from 'react-native';
import InputNavigator from '../components/InputNavigator.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is the amazing input app</Text>
        <InputNavigator/>
      </View>
    )
  }
}

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
