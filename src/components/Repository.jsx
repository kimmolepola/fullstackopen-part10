import React from 'react';
import useRepository from '../hooks/useRepository';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import { View } from 'react-native';

const repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  if (repository){
    return (
      <RepositoryItem single={true} item={repository}/>
    );
  }
  return <View/>;
};

export default repository;