import Form from '@/components/Profile/Profile-Settings/form'
import Header from '@/components/Profile/Profile-Settings/header'
import Navigation from '@/components/Profile/Profile-Settings/navigation'
import React from 'react'
import { SafeAreaView } from 'react-native'

const ProfileSetting = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Navigation />
      <Header />
      <Form />
    </SafeAreaView>
  )
}

export default ProfileSetting