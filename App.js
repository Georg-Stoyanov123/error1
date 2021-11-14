import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import BowelCancerScreen from './screens/BowelCancerScreen'

export default class App extends React.Component {
  render() {
  return (
    <View>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <Text style={styles.buttonText}>
        Sign in with Facebook
      </Text>
    </LinearGradient>
  </View>
  )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
