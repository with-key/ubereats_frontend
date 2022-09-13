import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

// reactive variables
export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      // 캐시에 local state 만들기
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
        },
      },
    },
  }),
});

export default client;
