import React from 'react';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import LoggedIn from './routers/LoggedIn';
import LoggedOut from './routers/LoggedOut';
import { isLoggedInVar } from './apollo';
import { css, Global } from '@emotion/react';

const reset = css`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  // reactive variables read
  // legacy
  // const {
  //   data: { isLoggedIn },
  // } = useQuery(IS_LOGGED_IN);

  const isLoggedIn = useReactiveVar(isLoggedInVar);
  console.log(isLoggedIn);
  return (
    <>
      <Global styles={reset} />
      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
    </>
  );
}

export default App;
