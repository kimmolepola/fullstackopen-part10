import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const Review = ({ item }) => {
  return (
    <View><Text>{JSON.stringify(item)}</Text></View>
  );
};

export default Review;