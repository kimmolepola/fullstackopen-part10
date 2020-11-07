import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  // ...
});

const AppBar = ({children}) => {
return <View style={styles.container}>{<Text>{children}</Text>}</View>;
};

export default AppBar;