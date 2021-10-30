import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloclient = new ApolloClient({
  uri: "http://server:3000/graphql",
  cache: new InMemoryCache()
})

export default apolloclient