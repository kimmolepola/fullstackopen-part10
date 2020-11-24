import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';
// import { useContext } from 'react';
// import AuthStorageContext from '../contexts/AuthStorageContext';
// import { useApolloClient } from '@apollo/react-hooks';

const useCreateReview = () => {
  //const authStorage = useContext(AuthStorageContext);
  //const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(CREATE_REVIEW);
  
  const review = async ({ ownerName, repositoryName, rating, text }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { props: { ownerName, repositoryName, rating, text } } });
    console.log("data-----", data);
    //await authStorage.setAccessToken(data.authorize.accessToken);
    //apolloClient.resetStore();
  };
  return [review, result];
};

export default useCreateReview;