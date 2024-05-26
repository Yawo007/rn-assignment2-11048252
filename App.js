import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.bold}>Yaw Osei Annor.</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan', // Background colour changes.
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Font size increases to 24.
  },
  bold: {
    fontWeight: 'bold',
  },
});
