
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={() => onLogin(username, password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'aliceblue',
    width:200,
    borderRadius: 10, 
  },
  
  input: {
    height: 40,
    borderColor: 'white', 
    borderWidth: 2, 
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black', 
    borderRadius: 5,
     
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default LoginForm;
