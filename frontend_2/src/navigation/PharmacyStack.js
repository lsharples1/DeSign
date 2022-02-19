import React from 'react';
import pharmacy from '../screens/pharmacy';
import uploadDoc from '../screens/pharmacy/uploadDocScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PharmacyStack() {
  return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={pharmacy} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Upload" component={uploadDoc} options={{
            headerShown: false,
          }} />
         
        </Stack.Navigator>
  );
}