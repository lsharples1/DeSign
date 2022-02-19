import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleService from '../../services/example.service';


const Stack = createNativeStackNavigator();

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examples: null,
    }
  }


  async componentDidMount() {
    const examples = await ExampleService.getAll().then(response => {
      return response.data;
    }).catch(error => {
      console.error(error);
    });

    this.setState({
      'examples': examples,
    })
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.examples)}</Text>
      </View>
    );
  }
}

export default Example;