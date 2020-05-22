import React from 'react';
import {StyleSheet} from 'react-native';
import {Authenticator, SignUp} from 'aws-amplify-react-native';
import LoggedInContent from './LoggedInContent';
import CustomSignIn from './CustomSignIn';

const App = () => {
  return (
    <Authenticator
      theme={customTheme}
      components={{
        signIn: <CustomSignIn />,
        signUp: <SignUp headerText="Custom Sign Up Header" />,
      }}>
      <LoggedInContent />
    </Authenticator>
  );
};

const customTheme = StyleSheet.create({
  container: {
    backgroundColor: 'greenyellow',
  },
});

export default App;
