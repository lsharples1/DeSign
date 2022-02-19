import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';



export default function App( { navigation }) {
  const platformOptions = ['pharmacy', 'studentJudiciary', 'banking'];
  const [platformValue, setPlatformValue]=useState('');
   const handleSelect=(e)=>{
    console.log(e);
    setPlatformValue(e)
  }

  return (
    <View style={styles.container}>
      <Text>landing page</Text>
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
          <Text> {platformValue}</Text>
    
      
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownBtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    alignSelf: 'center',
    marginBottom: 20
  },
  dropdownBtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdownRowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: { color: "#444", textAlign: "left" },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 1
   },
});