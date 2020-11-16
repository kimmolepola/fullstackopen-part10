import { useMutation } from '@apollo/react-hooks';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  
  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    mutate({ variables: { type: { username, password } } });
    return result;
  };
  return [signIn, result];
};

export default useSignIn;