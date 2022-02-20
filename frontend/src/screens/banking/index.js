import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App( { navigation } ) {
  return (
   
      <LinearGradient
        colors={['#4FC905', 'white']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}>
          <View>
          <Text style={[styles.headerText ]}>
          {' '}
          NCR Banking Dashboard
        </Text>
          </View>
        <View style={styles.container2}>
          <View style={styles.checklistContainer}>
            <Text style={[styles.checklistHeaderText]}>Checklist</Text>
          </View>
          <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {flex:2}, {marginLeft: 20}, {marginTop: 20}]}>Document 1</Text>
            <Text style={[{ color: 'red' }, { flex: 2 }, {marginTop: 20}]}>NOT SUBMITTED</Text>
            <Button
        title="Submit Here"
      />
          </View>
          
          <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {flex:2},  {marginLeft: 20},  {marginTop: 20}]}>Document 2</Text>
            <Text style={[{ color: 'red' }, { flex: 2 },  {marginTop: 20}]}>NOT SUBMITTED</Text>
            <Button
        title="Submit Here"
      />
          </View>

        
        <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {flex:2},  {marginLeft: 20},  {marginTop: 20}]}>Document 3</Text>
            <Text style={[{ color: 'red' }, { flex: 2 },  {marginTop: 20}]}>NOT SUBMITTED</Text>
            <Button
        title="Submit Here"
      />
          </View>

          <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {flex:2},  {marginLeft: 20},  {marginTop: 20}]}>Document 4</Text>
            <Text style={[{ color: 'red' }, { flex: 2 },  {marginTop: 20}]}>NOT SUBMITTED</Text>
            <Button
        title="Submit Here"
      />
          </View>
        </View>
      </LinearGradient>
  );
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
},
container2: {
  flex: 0.7,
  alignItems: 'center',
  justifyContent: 'space-around',
},
linearGradient: {
  alignItems: 'center',
  borderRadius: 5,
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
},
header: {
  top: -60,
},
checklistContainer: {
  flexDirection: 'row',
  backgroundColor: '#EDE4E4',
  width: 600,
  height: 70,
  borderRadius: 20,
  justifyContent: 'space-evenly',
},
headerText: {
  paddingTop: 60,
  paddingBottom: 60,
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 30,
},
checklistHeaderText: {
  fontWeight: 'bold',
  textAlign: 'center',
  paddingTop: 25,
},
});
