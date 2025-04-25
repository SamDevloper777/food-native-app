import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Pencil } from 'lucide-react-native'; // or use any icon lib

interface Props {
    title: string;
    value: string;
    onChange: (text: string) => void;
}

const FormPlaceHolder = ({ title, value, onChange }: Props) => {
    const [isEditable, setIsEditable] = useState(false);

    return (
        <View className="mb-2">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-[18px] font-bold">{title}</Text>
                {!isEditable && (
                    <TouchableOpacity onPress={() => setIsEditable(true)}>
                        <Pencil size={18} color="#666" />
                    </TouchableOpacity>
                )}
            </View>

            <TextInput
                className={`border border-[#dfdfdf] rounded-lg px-3 py-4 mt-1 bg-[#f5f5f5] text-[16px] font-normal ${
                    isEditable ? '' : 'text-[#888]'
                }`}
                placeholder={`Enter your ${title}`}
                editable={isEditable}
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
};

export default FormPlaceHolder;
