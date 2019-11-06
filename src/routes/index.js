import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Plan from '../pages/Plan';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/plans" component={Plan} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}