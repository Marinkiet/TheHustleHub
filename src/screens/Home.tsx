import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Snackbar from 'react-native-snackbar'

//context api
import AppwriteContext from '../appwrite/AppwriteContext'
import AppwriteService from '../appwrite/service'

type UserObj={
  name:String,
  email:String
}

const Home = () => {
  const [userData,setUserData]=useState<UserObj>()

  const {appwrite,setIsLoggedIn}=useContext(AppwriteContext)
  const handleLogout=()=>{
    appwrite.logout()
    .then(()=>{
      setIsLoggedIn(false);
      Snackbar.show({
        text:'Logged out Successfullly',
        duration:Snackbar.LENGTH_SHORT
      })
    })
  }

  useEffect(()=>{
    appwrite.getCurrentUser()
    .then((response)=>{
      if(response){
        const user:UserObj={
          name:response.name,
          email:response.email
        }
        setUserData(user)
      }
    })
  },[appwrite])
  return (

    
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})