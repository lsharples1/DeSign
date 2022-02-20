import React from 'react';
import Judiciary from '../screens/studentJudiciary';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function JudicaryStack() {
  return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={Judiciary} options={{
            headerShown: false,
          }} />
          
        </Stack.Navigator>
  );
}