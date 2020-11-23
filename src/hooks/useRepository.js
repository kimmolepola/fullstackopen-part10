import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, { variables: { repositoryId: id } }, { fetchPolicy: 'cache-and-network' });
  const repository = data ? data.repository : undefined;
  return { repository, error, loading };
};

export default useRepository;