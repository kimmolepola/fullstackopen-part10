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
    url,
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
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
  query GetRepositories($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const GET_REPOSITORIES_PAGINATED = gql`
  query GetRepositories($first: Int, $after: String, $searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(first: $first, after: $after, searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
`;

// other queries...