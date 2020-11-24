import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 0,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight/1.2,
    paddingLeft: Constants.statusBarHeight/1.5,
    paddingRight: Constants.statusBarHeight/1.5,
  },
});

const AppBarTab = ({ text, link }) => {
  return (
    <Link to={link} component={TouchableOpacity} activeOpacity={0.8}>
      <View style={styles.flexItem}>
        {<Text fontSize="subheading" color="subheading" fontWeight="bold">{text}</Text>}        
      </View>
    </Link>
  );
};

export default AppBarTab;