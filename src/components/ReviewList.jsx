import React from 'react';
import { FlatList } from 'react-native';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

const ReviewList = () => {
  const { reviews, fetchMore } = useReviews({ first: 8 });

  const onEndReach = () => {
    fetchMore();
  };

  const reviewNodes = reviews ? reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={ReviewItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );

};

export default ReviewList;