import React from 'react';
import studentJudiciary from '../screens/studentJudiciary';
import uploadDoc from '../screens/studentJudiciary/uploadDocScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function JudicaryStack() {
  return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={studentJudiciary} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Upload" component={uploadDoc} options={{
            headerShown: false,
          }} />
         
        </Stack.Navigator>
  );
}