import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import useSignOut from '../hooks/useSignOut';

const signOut = () => {
  const signOut = useSignOut();
  signOut();
  const history = useHistory();
  history.push("/SignIn");
  return <View/>;
};

export default signOut;