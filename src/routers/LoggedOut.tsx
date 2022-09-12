import React from "react";
import { isLoggedInVar } from "../apollo";

function LoggedOut() {
  // reactive variables update
  const onClick = () => {
    isLoggedInVar(true);
  };
  return (
    <div>
      <h1>로그아웃</h1>
      <button onClick={onClick}>로그인 하기</button>
    </div>
  );
}

export default LoggedOut;
