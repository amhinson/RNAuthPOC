import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, View} from 'react-native';
import {useAmplifySignIn} from 'aws-amplify-react-native';

const CustomSignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, submitting, onStateChange} = useAmplifySignIn();

  return (
    <SafeAreaView>
      <Text>This is the CUSTOM SIGN IN.</Text>

      <TextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        onChangeText={setPassword}
        password={password}
      />
      <Button
        title={submitting ? 'Submitting...' : 'Sign In'}
        disabled={submitting}
        onPress={() => signIn({username, password})}
      />

      <View style={{marginVertical: 50}} />
      <Button title="Sign Up" onPress={() => onStateChange('signUp')} />
      <Button
        title="Forgot Password"
        onPress={() => onStateChange('forgotPassword')}
      />
    </SafeAreaView>
  );
};

export default CustomSignUp;
