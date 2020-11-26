import { useMutation } from '@apollo/react-hooks';
import { AUTHORIZE } from '../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/react-hooks';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(AUTHORIZE);
  
  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    try {
      const { data } = await mutate({ variables: { creds: { username, password } } });
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      return data;
    } catch (e){
      console.log(e);
    }
  };
  return [signIn, result];
};

export default useSignIn;