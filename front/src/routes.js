import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './pages/root/App';
import UserCreatePage from './pages/users/userCreatePage';
import userEditPage from './pages/users/userEditPage';
import UserListPage from './pages/users/userListPage';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={UserListPage} />
      <Route exact path="/users/create" component={UserCreatePage} />
      <Route exact path="/users/:user_id/edit" component={userEditPage} />
    </Router>
  )
}

export default Routes
