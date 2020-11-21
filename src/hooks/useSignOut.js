import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/react-hooks';

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  return signOut;
};

export default useSignOut;