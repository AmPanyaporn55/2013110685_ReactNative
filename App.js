import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'
import TouchablePractice from './components/TouchablePractice'
import Example_useEffect from './components/Example_useEffect'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <TouchableExample/> */}
      {/* <TouchablePractice/> */}
      <Example_useEffect/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})