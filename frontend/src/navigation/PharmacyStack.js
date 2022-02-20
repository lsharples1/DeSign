import React from 'react';
import Pharmacy from '../screens/pharmacy';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PharmacyStack() {
  return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={Pharmacy} options={{
            headerShown: false,
          }} />
         
         
        </Stack.Navigator>
  );
}