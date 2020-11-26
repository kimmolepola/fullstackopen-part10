import React from 'react';
import useRepository from '../hooks/useRepository';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  separator: {
    height: theme.separator.normal,
  },
  flexContainer: {
    padding: theme.padding.normal,
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'white',
  },
  header: {
    marginBottom: theme.separator.normal
  },
  rating: {
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    width: theme.ratingCircle.size,
    height: theme.ratingCircle.size,
    borderRadius: theme.ratingCircle.size/2,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  reviewInfoAndText: {
    flexShrink: 1,
    marginLeft: theme.margin.normal,
    flexDirection: 'column',
    display: 'flex',
  },
  reviewInfo: {
    display: 'flex',
    flexDirection: 'column',
    height: theme.ratingCircle.size,
    justifyContent: 'center'
  }
});

const ReviewItem = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.rating}>
        <Text fontSize="extra" fontWeight="bold" color="primary" >{item.rating}</Text>
      </View>
      <View style={styles.reviewInfoAndText}>
        <View style={styles.reviewInfo}>
          <Text fontWeight="bold">{item.user.username}</Text>
          <Text color="textSecondary">{format(new Date(item.createdAt), 'dd.mm.yyyy')}</Text>
        </View>
        <Text >{item.text}</Text>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator}/>;

const Repository = () => {

  const { id } = useParams();
  const { repository } = useRepository(id);

  const reviews = repository ? repository.reviews.edges.map(x => x.node) : [];

  if (repository){
    return (
      <FlatList
        data={reviews}
        renderItem={ReviewItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <RepositoryItem single={true} item={repository}/>}
        ListHeaderComponentStyle={styles.header}
        ItemSeparatorComponent={ItemSeparator}
        stickyHeaderIndices={[0]}
      />
    );
  }
  return <View/>;
};

export default Repository;