import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Greetings, SignOut} from 'aws-amplify-react-native';

const LoggedInContent = () => {
  return (
    <SafeAreaView>
      <Greetings username="amhinson" />
      <Text style={styles.text}>This is the app.</Text>
      <SignOut />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 60,
    textAlign: 'center',
  },
});

export default LoggedInContent;
