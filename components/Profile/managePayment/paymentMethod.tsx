import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const PaymentMethod = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
    return (
        <TouchableOpacity className='flex-row items-center justify-between p-4 bg-white rounded-2xl mb-3 border border-gray-200'>
            <View className='flex-row items-center space-x-3 gap-2'>
                <View className='p-2'>
                    {icon}
                </View>
                <Text className='text-base font-semibold text-black'>{name}</Text>
            </View>
            <Ionicons name='radio-button-off' size={22} color='gray' />
        </TouchableOpacity>
    )
}

export default PaymentMethod