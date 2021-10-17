import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router } from 'react-router';
import routes, { renderRoutes } from "./routes";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
