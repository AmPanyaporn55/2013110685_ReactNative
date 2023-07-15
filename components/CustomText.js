import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fName, lname}) => {
    return (
        <View>
            <Text>Your First Name is {fName}! and Last name is {lname}</Text>
        </View>
    )
}

const CustomText = () => {
  return (
    <View>
        <MyCustomTextWith fName="Panyaporn" lname="Luangpolsinkul"/>
      <MyCustomTextWith fName="Kanlayanuch" lname="Srichote"/>
    </View>
  )
}

export default CustomText