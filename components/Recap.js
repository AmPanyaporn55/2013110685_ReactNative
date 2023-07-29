import { StyleSheet, Text, View , Button, TextInput} from 'react-native'
import { useState } from 'react' 
const Recap = () => {

    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');

    const alertTextInput = () => {
        alert (
            'Email: ' +textInputEmail  + '\n' +
            'Password: ' +textInputPassword
        )
    }



  return (
    <View style={styles.container}>
        <TextInput
            placeholder='Email'
            style = {styles.input}
            value= {textInputEmail} //ค่าของstate text ปัจจุบัน
            onChangeText={(value) => {setTextInputEmail(value)}}
        />
        <TextInput
            placeholder='Password'
            style = {styles.input}
            value= {textInputPassword} //ค่าของstate text ปัจจุบัน
            onChangeText={(value) => {setTextInputPassword(value)}}
        />
        <Text>{'\n\n'}</Text>
        <Button
            style = {styles.submitButton}
            title='Submit'
            onPress= {() => {
                alertTextInput()} }
        />
  </View>
  )
}

export default Recap

const styles = StyleSheet.create({
    container: {
        padding: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})