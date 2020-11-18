import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: theme.colors.barBackground,
  },
});

const AppBar = () => {
  const { data } = useAuthorizedUser();
  return <View style={styles.flexContainer}>
    <ScrollView horizontal>
      <AppBarTab text={"Repositories"} link={"/"}/>
      { data && data.authorizedUser ? <AppBarTab text={"Sign out"} link={"/SignOut"}/> : <AppBarTab text={"Sign in"} link={"/SignIn"}/>}
    </ScrollView>
  </View>;
};

export default AppBar;

