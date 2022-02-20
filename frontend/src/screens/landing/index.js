import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, Alert, TextInput, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';
import styles from '../styles';


export default function App( { navigation }) {
  const platformOptions = ['Pharmacy', 'Judiciary', 'Banking'];
  const [platformValue, setPlatformValue]=useState('');
   const handleSelect=(e)=>{
    console.log(e);
    setPlatformValue(e)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>DeSign</Text>
      <Text style={styles.headerText}>Bringing your business together as simple as a handshake.</Text>
      <Image style={styles.image} source={require('../../assets/DeSign.png')} />
      <SignInScreen/>
      <SelectDropdown
            data={platformOptions}
            onSelect={handleSelect}
            defaultButtonText={"Select Platform"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />    
      <Button
        title="Log In"
        onPress={() => navigation.navigate(platformValue)}
      />
      
    </View>
  );
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View>
      <TextInput
      style={styles.input}
        placeholder="   Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
      style={styles.input}
        placeholder="   Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    </View>
    
  );
}
