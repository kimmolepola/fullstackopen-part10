import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import useSignOut from '../hooks/useSignOut';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const SignOut = ({ setLoggedIn }) => {
  const signOut = useSignOut();
  signOut();
  const history = useHistory();
  const checkIfLoggedOut = async () => {
    const { data } = await useAuthorizedUser();
    if (data != undefined && data.authorizerUser == null){
      setLoggedIn(false);
      history.push("/SignIn");
    }
  };
  checkIfLoggedOut();
  return <View/>;
};

export default SignOut;