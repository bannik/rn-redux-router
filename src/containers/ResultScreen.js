import React from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Text, Button } from 'react-native';
import InputNavigator from '../components/InputNavigator.js';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class ResultScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>And your input was:</Text>
        <Text>{this.props.input}</Text>
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    input: state.InputReducers.text
  }
}


ResultScreen.navigationOptions = {
  title: 'Home Screen',
};

export default connect(mapStateToProps)(ResultScreen);
