import { StyleSheet, Text, TextInput, TouchableOpacity, View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const users = [
  {
    email:'user',
    password:'pass'
  },
  {
    email:'user2@gmail.com',
    password:'password2'
  }
]

const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigation = useNavigation();

  const handleSignup = () => {
    // Check for existing user
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert('Email already exists');
    } else {
      // Add new user to the array
      users.push({ email, password });
      console.log('New user added:', users);

      // Navigate to Home screen (adjust as needed)
      navigation.navigate('Home');
    }
  };
  const gotologin =()=>{
    navigation.navigate('Login');
   }  

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.inputWrapper}>
    <TextInput style={styles.textInput} autoCapitalize="none" value={email} placeholder='email' onChangeText={setEmail}></TextInput>
    <TextInput style={styles.textInput} autoCapitalize="none"value={password} placeholder='password' onChangeText={setPassword} ></TextInput>
  </View>
  <TouchableOpacity onPress={()=>handleSignup()} style={styles.buttonWapper}>
    <Text>Signup</Text>
  </TouchableOpacity>
  <View style={styles.existingAccountWrapper}>
  <Text>Already have an account? </Text>
  <TouchableOpacity onPress={()=>gotologin()}><Text style={styles.goToSigninText}>Login</Text></TouchableOpacity>
  </View>
  
</SafeAreaView>
  )
}

export default Signup


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#def9fa',
    alignItems:'center',
    justifyContent:'center'
  },
  inputWrapper:{
    width:'80%'
  },
  textInput:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  existingAccountWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  },
  goToSigninText:{
    color:'dodgerblue',
    textDecorationLine:'underline',
    fontSize:18
  },
  buttonWapper:{
    alignItems:'center',
    justifyContent:'center',
    width:'60%',
    backgroundColor:'pink',
    height: 40,
    marginTop:40
  }
})