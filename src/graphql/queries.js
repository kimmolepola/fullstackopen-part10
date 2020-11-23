import { gql } from 'apollo-boost';

export const GET_REPOSITORY = gql`
query GetRepository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url
  }
}
`;

export const GET_AUTHORIZED_USER = gql`
  query {
      authorizedUser {
        id
        username
      }
    }
`;

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id,
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage,
          ownerAvatarUrl
        }
      }
    }
  }
`;

// other queries...