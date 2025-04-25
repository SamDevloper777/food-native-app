import { View } from 'react-native';
import React, { useState } from 'react';
import FormPlaceHolder from './formPlaceHolder';
import Save from './save';

const Form = () => {
    const [updatedUser, setUpdatedUser] = useState({
        name: 'Richa Sharma',
        phone_number: '9876543210',
        email: 'richa@example.com',
        address: 'New Delhi, India',
    });

    const handleChange = (key: string, value: string) => {
        setUpdatedUser((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <View className="px-6">
            <FormPlaceHolder
                title="Name"
                value={updatedUser.name}
                onChange={(val) => handleChange('name', val)}
            />
            <FormPlaceHolder
                title="Phone Number"
                value={updatedUser.phone_number}
                onChange={(val) => handleChange('phone_number', val)}
            />
            <FormPlaceHolder
                title="Email"
                value={updatedUser.email}
                onChange={(val) => handleChange('email', val)}
            />
            <FormPlaceHolder
                title="Address"
                value={updatedUser.address}
                onChange={(val) => handleChange('address', val)}
            />
            <Save updatedUser={updatedUser} />
        </View>
    );
};

export default Form;
