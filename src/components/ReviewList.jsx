import React from 'react';
import { FlatList } from 'react-native';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import { useHistory } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

const ReviewList = () => {
  const [deleteReview] = useDeleteReview();
  const { reviews, fetchMore } = useReviews({ first: 8 });
  const history = useHistory();

  const onEndReach = () => {
    fetchMore();
  };

  const reviewNodes = reviews ? reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={(item) => <ReviewItem myReviews={true} deleteReview={deleteReview} history={history} item={item.item}/>}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );

};

export default ReviewList;