import { handleSkip } from '@/utils/scripts/auth';
import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

const DevSkip = () => {
    const dispatch = useDispatch();

    return (
        <Text className="text-xs text-center text-gray-500 mt-4">
            Dev Mode:{' '}
            <Text
                className="text-[#FC913A] font-semibold"
                onPress={() => handleSkip(dispatch)}
            >
                Skip
            </Text>
        </Text>
    )
}

export default DevSkip