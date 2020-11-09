import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 0,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight/1.2,
    paddingLeft: Constants.statusBarHeight/1.5,
  },
});

const AppBarTab = ({text}) => {
  return (
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <View style={styles.flexItem}>
        {<Text fontSize="subheading" color="subheading" fontWeight="bold">{text}</Text>}        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;