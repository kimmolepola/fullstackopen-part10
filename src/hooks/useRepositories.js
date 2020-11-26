import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (ordering) => {
  const { orderBy, orderDirection } = ordering;
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { variables: { orderBy, orderDirection } }, { fetchPolicy: 'cache-and-network' });
  const repositories = data ? data.repositories : undefined;
  return { repositories, error, loading };
};

export default useRepositories;