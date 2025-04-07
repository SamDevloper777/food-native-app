import Form from '@/components/Profile/profileSettings/form'
import Header from '@/components/Profile/profileSettings/header'
import Navigation from '@/components/common/navigation'
import React from 'react'
import { SafeAreaView } from 'react-native'

const ProfileSetting = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Navigation title='Profile Settings'/>
      <Header />
      <Form />
    </SafeAreaView>
  )
}

export default ProfileSetting