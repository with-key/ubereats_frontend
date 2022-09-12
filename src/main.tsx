import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, gql } from "@apollo/client";
import App from "./App";
import client from "./apollo";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
