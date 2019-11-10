import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Plans from '../pages/Plans/index';
import PlanCreate from '../pages/Plans/create';
import PlanEdit from '../pages/Plans/edit';

import Registrations from '../pages/Registrations';
import RegistrationCreate from '../pages/Registrations/create';
import RegistrationEdit from '../pages/Registrations/edit';

import Students from '../pages/Students';
import StudentCreate from '../pages/Students/create';
import StudentEdit from '../pages/Students/edit';

import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route exact path="/plans" component={Plans} isPrivate />
      <Route path="/plans/create" component={PlanCreate} isPrivate />
      <Route path="/plans/:id/edit" component={PlanEdit} isPrivate />

      <Route exact path="/registrations" component={Registrations} isPrivate />
      <Route
        path="/registrations/create"
        component={RegistrationCreate}
        isPrivate
      />
      <Route
        path="/registrations/:id/edit"
        component={RegistrationEdit}
        isPrivate
      />

      <Route exact path="/students" component={Students} isPrivate />
      <Route path="/students/create" component={StudentCreate} isPrivate />
      <Route path="/students/:id/edit" component={StudentEdit} isPrivate />

      <Route path="/help_orders" component={HelpOrders} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
