import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, Alert } from 'react-native';

export default function App( { navigation }) {
  return (
    <View style={styles.container}>
      <Text>landing page</Text>
      <Button
        title="banking"
        onPress={() => navigation.navigate('banking')}
      />
      <Button
        title="pharmacy"
        onPress={() => navigation.navigate('pharmacy')}
      />
      <Button
        title="student judiciary"
        onPress={() => navigation.navigate('studentJudiciary')}
      />
      <Button
        title="example"
        onPress={() => navigation.navigate('example')}
      />
    </View>
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