import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async ({ ownerName, repositoryName, rating, text }) => {
    // call the mutate function here with the right arguments

    const { data } = await mutate({ variables: { props: { ownerName, repositoryName, rating, text } } });
    return data;
  };
  return [review, result];
};

export default useCreateReview;