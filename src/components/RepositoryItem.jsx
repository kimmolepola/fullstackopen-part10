import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.normal,
  },
  flexContainer: {
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: 'white',
  },
  flexContainerImageAndInfo: {
    paddingTop: Constants.statusBarHeight/1.8,
    paddingLeft: Constants.statusBarHeight/1.8,
    paddingBottom: Constants.statusBarHeight/1.2,
    display: 'flex',
    flexDirection: 'row',
  },
  flexContainerInfo: {
    flexShrink: 1,
    paddingLeft: Constants.statusBarHeight/2,
    paddingRight: Constants.statusBarHeight/2,
    display: 'flex',
    flexDirection: 'column',
  },
  flexContainerStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: Constants.statusBarHeight/2,
  },
  flexContainerStatsItems: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },
  flexItem: {
    flexGrow: 0,
  },
});

const RenderItem = ({item}) => (
  <View style={styles.flexContainer}>
    <View style={styles.flexContainerImageAndInfo}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
      <View style={styles.flexContainerInfo}>
        <Text fontWeight="bold">
          {item.fullName}
        </Text>
        <Text color="textSecondary" paddingTopBottom="true">
          {item.description}
        </Text>
        <Text padding="true" backgroundColor="true" color="subheading">
          {item.language}
        </Text>
      </View>
    </View>
    <View style={styles.flexContainerStats}>
      <View style={styles.flexContainerStatsItems}>
        <Text fontWeight="bold">
          {item.stargazersCount}
        </Text>
        <Text  color="textSecondary">
          Stars
        </Text>
      </View>
      <View style={styles.flexContainerStatsItems}>
        <Text fontWeight="bold">
          {item.forksCount}
        </Text>
        <Text  color="textSecondary">
          Forks
        </Text>
      </View>
      <View style={styles.flexContainerStatsItems}>
        <Text fontWeight="bold">
          {item.reviewCount}
        </Text>
        <Text  color="textSecondary">
          Reviews
        </Text>
      </View>
      <View style={styles.flexContainerStatsItems}>
        <Text fontWeight="bold">
          {item.ratingAverage}
        </Text>
        <Text  color="textSecondary">
            Rating
        </Text>
      </View>
    </View>
  </View>
);

export default RenderItem;