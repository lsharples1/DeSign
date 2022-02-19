import React from 'react';
import Example from '../screens/example/example';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Example' screenOptions={{animation: 'fade'}} >
      <Stack.Screen name='Example' component={Example} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
}