import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
mutation Authorize($creds: AuthorizeInput!){
  authorize(credentials: $creds) {
    accessToken
  }
}
`;