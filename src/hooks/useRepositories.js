import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';
import { useDebounce } from 'use-debounce';

const useRepositories = (ordering, filterKeyword) => {
  const [searchKeyword] = useDebounce(filterKeyword, 250);
  const { orderBy, orderDirection } = ordering;
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { variables: { searchKeyword, orderBy, orderDirection } }, { fetchPolicy: 'cache-and-network' });
  const repositories = data ? data.repositories : undefined;
  return { repositories, error, loading };
};

export default useRepositories;