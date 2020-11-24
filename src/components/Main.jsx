import React, { useState } from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Repository from './Repository';
import RepositoryReviewForm from './RepositoryReviewForm';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const Main = () => {
  const { data } = useAuthorizedUser();
  const [loggedIn, setLoggedIn] = useState(data != undefined && data.authorizedUser != null);

  return (
    <View style={{ flex: 1 }} backgroundColor={theme.colors.appBackground}>
      <AppBar loggedIn={loggedIn}/>
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/SignIn" exact>
          <SignIn setLoggedIn={setLoggedIn}/>
        </Route>
        <Route path="/SignOut" exact>
          <SignOut setLoggedIn={setLoggedIn}/>
        </Route>
        <Route path="/Repository/:id">
          <Repository />
        </Route>
        <Route path="/Review" exact>
          <RepositoryReviewForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
