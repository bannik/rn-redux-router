import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    paddingTop: 10,
    color: "#000",
    width: 300,
    paddingBottom: 25
  },
});

class InputScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      input: ''
    }
  }
  userInputSubmit(){
    if (this.state.input) {
      this.props.inputMutates(this.state.input)
    }else{
      alert("The input is empty")
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>This is the amazing input screen</Text>
        <View>
          <TextInput style={styles.input} selectionColor="#000000" ref="passwordInput" onSubmitEditing={(e) => this.userInputSubmit()} returnKeyType="send" placeholder="Your Input" value={this.state.input} onChangeText={(inputText) => this.setState({input: inputText})} />
          <Button onPress={(e) => this.userInputSubmit()} title="Submit the input" />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state){
  return {
    nav: state.nav
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

InputScreen.navigationOptions = {
  title: 'Input Screen',
};


export default connect(mapStateToProps, mapDispatchToProps)(InputScreen);
