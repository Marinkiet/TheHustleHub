import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {

  const navigation = useNavigation();

 const gotologin =()=>{
  navigation.navigate('Login');
 }  
 const gotoSignup= ()=>{
  navigation.navigate('Signup');
 }  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Home Screen!</Text> 
      <TouchableOpacity  onPress={()=>gotologin()}><Text>Login</Text></TouchableOpacity>
      <TouchableOpacity  onPress={()=>gotoSignup()}><Text>Signup</Text></TouchableOpacity>
    </View> 
  );
};

export
 
default Home;