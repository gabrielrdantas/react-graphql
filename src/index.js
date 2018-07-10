import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterSwitchComponent from './presentation/routes/RouterSwitchComponent';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "./config/apolloClient";


ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
    <BrowserRouter>
        <Route component={RouterSwitchComponent} />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
