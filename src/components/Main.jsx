import React from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const Main = () => {
  return (
    <View style={{flex: 1}} backgroundColor={theme.colors.appBackground}>
      <AppBar/>
      <RepositoryList/>
    </View>
  );
};

export default Main;
