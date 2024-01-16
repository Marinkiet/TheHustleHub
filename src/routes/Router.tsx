import { Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Loading from '../components/Loading'
import AppwriteContext from '../appwrite/AppwriteContext'


//Routes
import Appstack from './Appstack'
import Authstack from './Authstack'

const Router = () => {
const [isLoading,setIsLoading]=useState<boolean>(true)
//grap context values
const {appwrite,isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext)

//after router loads up, find loggedin user

useEffect(()=>{
    appwrite.getCurrentUser()
    .then(response=>{
        //set default
        setIsLoading(false)
        //if response is successful dont load
        if(response){
            setIsLoggedIn(true)
        }
    })
    .catch(_=>{
        setIsLoading(false)
        setIsLoggedIn(false)
    })
},[appwrite,isLoggedIn]) //if anychange in appwrite re-render, anychange in isLoggedIn

//if is loading 
if(isLoading){
    return <Loading/>
}
//else
  return (
    <NavigationContainer>
        {isLoggedIn? <Appstack/>:<Authstack/>}
    </NavigationContainer>
  )
}

export default Router

