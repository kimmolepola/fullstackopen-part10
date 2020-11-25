import { gql } from 'apollo-boost';

export const CREATE_REVIEW = gql`
mutation CreateReview($props: CreateReviewInput!){
  createReview(review: $props) {
    repositoryId
  }
}
`;

export const AUTHORIZE = gql`
mutation Authorize($creds: AuthorizeInput!){
  authorize(credentials: $creds) {
    accessToken
  }
}
`;
