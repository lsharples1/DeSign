import React from 'react';
import Banking from '../screens/banking';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function BankingStack() {
  return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={Banking} options={{
            headerShown: false,
          }} />
          
         
        </Stack.Navigator>
  );
}