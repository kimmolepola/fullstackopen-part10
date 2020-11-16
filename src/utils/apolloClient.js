import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = () => {
  return new ApolloClient({
    // Replace the IP address part with your own IP address!
    //uri: 'http://192.168.42.215:5000/graphql',
    uri: Constants.manifest.extra.apollo_uri
  });
};

export default createApolloClient;