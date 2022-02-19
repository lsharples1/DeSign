import React from 'react';
import banking from '../screens/banking';
import uploadDoc from '../screens/banking/uploadDocScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function BankingStack() {
  return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={banking} options={{
            headerShown: false,
          }} />
            <Stack.Screen name="Upload" component={uploadDoc} options={{
            headerShown: false,
          }} />
         
        </Stack.Navigator>
  );
}