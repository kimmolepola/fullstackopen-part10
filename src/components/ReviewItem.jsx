import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
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
  let name = "";
  if (item.user){
    name = item.user.username;
  } else if (item.repository){
    name = item.repository.fullName;
  }

  return (
    <View style={styles.flexContainer}>
      <View style={styles.rating}>
        <Text fontSize="extra" fontWeight="bold" color="primary" >{item.rating}</Text>
      </View>
      <View style={styles.reviewInfoAndText}>
        <View style={styles.reviewInfo}>
          <Text fontWeight="bold">{name}</Text>
          <Text color="textSecondary">{format(new Date(item.createdAt), 'dd.MM.yyyy')}</Text>
        </View>
        <Text >{item.text}</Text>
      </View>
    </View>
  );
};
  
export default ReviewItem;