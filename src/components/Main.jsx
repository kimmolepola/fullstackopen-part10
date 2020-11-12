import React from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import {Route, Switch, Redirect} from 'react-router-native';
import SignIn from './SignIn';

const Main = () => {
  return (
    <View style={{flex: 1}} backgroundColor={theme.colors.appBackground}>
      <AppBar/>
      <Switch>
        <Route path="/" exact>
          <RepositoryList/>
        </Route>
        <Route path="/SignIn" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
