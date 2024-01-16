import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export type AuthtackParamList={
    Login:undefined;
    Signup:undefined
}

const Stack = createNativeStackNavigator<AuthtackParamList>();
const Authstack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerTitleAlign:'center',
        headerBackTitleVisible:false
    }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
    </Stack.Navigator>
  )
}

export default Authstack

