import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://iepsen.globo.com:4000"
});

export default client;