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

const Stat = ({ testid, name, value }) => (
  <View style={styles.flexContainerStatsItems}>
    <Text testID={testid} fontWeight="bold">
      {value}
    </Text>
    <Text color="textSecondary">
      {name}
    </Text>
  </View>
);

const RenderItem = ({ item }) => (
  <View testID="repositoryItem" style={styles.flexContainer}>
    <View style={styles.flexContainerImageAndInfo}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
      <View style={styles.flexContainerInfo}>
        <Text testID="fullName" fontWeight="bold">
          {item.fullName}
        </Text>
        <Text testID="description" color="textSecondary" paddingTopBottom="true">
          {item.description}
        </Text>
        <Text testID="language" padding="true" backgroundColor="true" color="subheading">
          {item.language}
        </Text>
      </View>
    </View>
    <View style={styles.flexContainerStats}>
      <Stat testid="Stars" name="Stars" value={item.stargazersCount} />
      <Stat testid="Forks" name="Forks" value={item.forksCount} />
      <Stat testid="Reviews" name="Reviews" value={item.reviewCount} />
      <Stat testid="Rating" name="Rating" value={item.ratingAverage} />
    </View>
  </View>
);

export default RenderItem;
