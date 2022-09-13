import React from 'react';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import LoggedIn from './routers/LoggedIn';
import LoggedOut from './routers/LoggedOut';
import { isLoggedInVar } from './apollo';

// const IS_LOGGED_IN = gql`
//   {
//     isLoggedIn @client
//   }
// `;

function App() {
  // reactive variables read
  // legacy
  // const {
  //   data: { isLoggedIn },
  // } = useQuery(IS_LOGGED_IN);

  const isLoggedIn = useReactiveVar(isLoggedInVar);
  console.log(isLoggedIn);
  return isLoggedIn ? <LoggedIn /> : <LoggedOut />;
}

export default App;
