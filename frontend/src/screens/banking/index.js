import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import UploadFileButton from '../../components/uploadFileButton';
import ExecuteSmartContractButton from '../../components/executeSmartContractButton';
import styles from '../styles.js';
export default function App( { navigation } ) {
  return (
    <View style={styles.container}>
          <Text style={[styles.headerText]}>NCR Banking Dashboard</Text>
        <View style={styles.container2}>
            <Text style={[styles.checklistHeaderText, {fontSize:22}]}>Checklist</Text>
          <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {fontFamily: 'Avenir'}, {flex:2}, {marginLeft: 20}, {marginTop: 20}]}>Loan Application</Text>
            <UploadFileButton />
          </View>
          
          <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {fontFamily: 'Avenir'}, {flex:2},  {marginLeft: 20},  {marginTop: 20}]}>Tax Report</Text>
            <UploadFileButton />
          </View>

        
        <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {fontFamily: 'Avenir'}, {flex:2},  {marginLeft: 20},  {marginTop: 20}]}>Spending Report</Text>
            <UploadFileButton />
          </View>

          <View style={styles.checklistContainer}>
            <Text style={[{ fontWeight: 'bold' }, {fontFamily: 'Avenir'}, {flex:2},  {marginLeft: 20},  {marginTop: 20}]}>Earnings Report</Text>
            <UploadFileButton />
          </View>
          

        </View>
        <ExecuteSmartContractButton style={[{flex:1}]}/> 
    </View>
  );
}

