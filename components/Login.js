import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const Login = () => {

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');

    const checkTextInput = () =>{
        //check for the Name TextInput
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        //checked for the Email TextInput
        if (!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }
        //checked Successfully
        else {
            alert('Success');
        }
    }

  return (
    <View style={styles.container}>
    <TextInput
    placeholder='Enter Name'
    style = {styles.textInputStyle}
    value= {textInputName} //ค่าของstate text ปัจจุบัน
    onChangeText={(value) => {setTextInputName(value)}}
    />
    <TextInput
    placeholder='Enter Email'
    style = {styles.textInputStyle}
    value= {textInputEmail} //ค่าของstate text ปัจจุบัน
    onChangeText={(value) => {setTextInputEmail(value)}}
    />
    <Text>{'\n\n'}</Text>
    <Button
    title='Submit'
    onPress={checkTextInput} 
    />
  </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: 300,
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
})