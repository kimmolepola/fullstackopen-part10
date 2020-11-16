import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
mutation Authorize($type: AuthorizeInput!){
  authorize(credentials: $type) {
    accessToken
  }
}
`;