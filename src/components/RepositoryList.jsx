import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  flexContainer: {
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: 'yellow',
  },
  flexContainerImageAndInfo: {
    paddingTop: Constants.statusBarHeight/2,
    paddingLeft: Constants.statusBarHeight/2,
    display: 'flex',
    flexDirection: 'row',
  },
  flexContainerInfo: {
    paddingLeft: Constants.statusBarHeight/2,
    display: 'flex',
    flexDirection: 'column',
  },
  flexContainerStats: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexItem: {
    paddingLeft: Constants.statusBarHeight/2,
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
        <Text style={styles.flexItem}>
          Full name: {item.fullName}
        </Text>
        <Text style={styles.flexItem}>
          Descritpion: {item.description}
        </Text>
        <Text style={styles.flexItem}>
          Language: {item.language}
        </Text>
      </View>
    </View>
    <View style={styles.flexContainerStats}>
      <Text style={styles.flexItem}>
        Stars: {item.stargazersCount}
      </Text>
      <Text style={styles.flexItem}>
        Forks: {item.forksCount}
      </Text>
      <Text style={styles.flexItem}>
        Reviews: {item.reviewCount}
      </Text>
      <Text style={styles.flexItem}>
        Rating: {item.ratingAverage}
      </Text>
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