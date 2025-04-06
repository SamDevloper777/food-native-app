import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormPlaceHolder = ({title}: {title: string}) => {
    return (
        <View className='mb-2'>
            <Text className="text-[18px] font-bold mb-2">{title}</Text>
            <TextInput
                className="border border-[#dfdfdf] rounded-lg px-3 py-4 mb-4 mt-1 bg-[#f5f5f5] text-[16px] font-normal"
                placeholder={`Enter your ${title}`}
            />
        </View>
    )
}

export default FormPlaceHolder