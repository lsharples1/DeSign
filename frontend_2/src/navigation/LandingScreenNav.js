import React from 'react';

import landing from '../screens/landing'
import banking from '../screens/banking';
import pharmacy from '../screens/pharmacy';
import studentJudiciary from '../screens/studentJudiciary';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function ExplorePageStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={landing} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="banking" component={banking}  options={{
            headerShown: false,
          }} />
          <Stack.Screen name="pharmacy" component={pharmacy}  options={{
            headerShown: false,
          }} />
            <Stack.Screen name="studentJudiciary" component={studentJudiciary}  options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}