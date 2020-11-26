import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import useSignOut from '../hooks/useSignOut';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const SignOut = ({ setLoggedIn }) => {
  const signOut = useSignOut();
  const history = useHistory();
  signOut();
  const checkIfLoggedOut = async () => {
    const { data } = await useAuthorizedUser();
    if (data != undefined && data.authorizerUser == null){
      setLoggedIn(false);
      history.push("/");
    }
  };
  checkIfLoggedOut();
  return <View/>;
};

export default SignOut;