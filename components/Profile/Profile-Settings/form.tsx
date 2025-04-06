import { View, Text, TextInput } from 'react-native'
import React from 'react'
import FormPlaceHolder from './formPlaceHolder'
import Save from './save'

const Form = () => {
    return (
        <View className="px-6">
            <FormPlaceHolder title='Name'/>
            <FormPlaceHolder title='Phone Number'/>
            <FormPlaceHolder title='Email'/>
            <FormPlaceHolder title='Address'/>
            <Save />
        </View>
    )
}

export default Form