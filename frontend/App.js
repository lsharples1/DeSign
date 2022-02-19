import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import landing from './src/screens/landing'
import banking from './src/screens/banking';
import pharmacy from './src/screens/pharmacy';
import studentJudiciary from './src/screens/studentJudiciary';
import JudicaryStack from './src/navigation/JudiciaryStack';
import BankingStack from './src/navigation/BankingStack';
import PharmacyStack from './src/navigation/PharmacyStack';
import LandingScreenNav from './src/navigation/LandingScreenNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import ExampleStack from './src/navigation/ExampleStack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Main' screenOptions={{animation: 'fade'}} >
      <Stack.Screen name="Main" component={landing} />
      <Stack.Screen name="banking" component={BankingStack} />
      <Stack.Screen name="pharmacy" component={PharmacyStack} />
      <Stack.Screen name="studentJudiciary" component={JudicaryStack} />
      <Stack.Screen name="example" component={ExampleStack} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
