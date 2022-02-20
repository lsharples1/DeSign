import React from 'react';

import Landing from '../screens/landing'
import Banking from '../screens/banking';
import Pharmacy from '../screens/pharmacy';
import Judiciary from '../screens/studentJudiciary';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function ExplorePageStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
          <Stack.Screen name="Main" component={Landing} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Banking" component={Banking}  options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Pharmacy" component={Pharmacy}  options={{
            headerShown: false,
          }} />
            <Stack.Screen name="Judiciary" component={Judiciary}  options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}