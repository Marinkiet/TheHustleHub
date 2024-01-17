import { StyleSheet, Text, TextInput, TouchableOpacity, View ,SafeAreaView} from 'react-native'
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


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin =  () => {
    const matchingUser = users.find((user) => user.email === email && user.password === password);

    if(!matchingUser){
      alert('User does not exist');
      console.log(email +":" +password)
      console.log('Invalid email or password');
    }else{
      navigation.navigate('Home');//if user found
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.textInput} autoCapitalize="none" value={email} placeholder='email' onChangeText={setEmail}></TextInput>
        <TextInput style={styles.textInput} autoCapitalize="none"value={password} placeholder='password' onChangeText={setPassword} ></TextInput>
      </View>
      <TouchableOpacity onPress={()=>handleLogin()} style={styles.buttonWapper}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login

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
  buttonWapper:{
    alignItems:'center',
    justifyContent:'center',
    width:'60%',
    backgroundColor:'pink',
    height: 40,
    marginTop:40
  }
})