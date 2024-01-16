import React, { useState } from 'react';
import { View, Text, TextInput, Button } from

  'react-native';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (e.g., authenticate with server)
    // Navigate to home screen or other relevant screen upon successful login
  };

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'
      }}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;