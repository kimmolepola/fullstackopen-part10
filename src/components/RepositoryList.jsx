import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  separator: {
    height: theme.separator.normal,
  }
});

const Picker = ({ setOrdering }) => (
  <RNPickerSelect
    onValueChange={(value) => setOrdering(value)}
    items={[
      { label: 'Latest repositories', value: { orderBy: "CREATED_AT" } },
      { label: 'Highest rated repositories', value: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" } },
      { label: 'Lowest rated repositories', value: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" } },
    ]}
  />
);

const ItemSeparator = () => <View style={styles.separator}/>;

export const RepositoryListContainer = ({ repositories, setOrdering }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <Picker setOrdering={setOrdering}/>}
      // other props
    />
  );
};

const RepositoryList = ({ ordering, setOrdering }) => {

  const { repositories } = useRepositories(ordering);

  return <RepositoryListContainer setOrdering={setOrdering} repositories={repositories}/>;
};

export default RepositoryList;
