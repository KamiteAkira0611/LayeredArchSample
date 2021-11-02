import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router } from 'react-router';
import routes, { renderRoutes } from "./routes";
import { ApolloProvider } from '@apollo/client';
import apolloclient from './utils/graphql';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloclient}>
      <Router history={history}>
        {renderRoutes(routes)}
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
