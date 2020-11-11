import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4
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

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RenderItem = ({item}) => {
  const asdf = RepositoryItem(item);
  console.log(asdf);
  return asdf;
};

const xRenderItem = ({item}) => (
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
        {<Text padding="true" backgroundColor="true" color="subheading">
          {item.language}
        </Text>}
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

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
      // other props
    />
  );
};

export default RepositoryList;