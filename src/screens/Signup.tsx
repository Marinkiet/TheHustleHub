import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here (e.g., send data to server)
    //navigation.navigate('Login'); // Navigate to login screen after successful signup
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup</Text>
      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Signup;