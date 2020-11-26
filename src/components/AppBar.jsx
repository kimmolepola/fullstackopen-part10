import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: theme.colors.barBackground,
  },
});

const AppBar = ({ loggedIn }) => (
  <View style={styles.flexContainer}>
    <ScrollView horizontal>
      <AppBarTab text={"Repositories"} link={"/"}/>
      { loggedIn
        ? <AppBarTab text={"Create a review"} link={"/Review"}/>
        : <View/>
      }
      { loggedIn
        ? <AppBarTab text={"Sign out"} link={"/SignOut"}/>
        : <AppBarTab text={"Sign in"} link={"/SignIn"}/>
      }
      { loggedIn
        ? <View/>
        : <AppBarTab text={"Sign up"} link={"/SignUp"}/>
      }
    </ScrollView>
  </View>
);

export default AppBar;
