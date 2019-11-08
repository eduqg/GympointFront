import { combineReducers } from 'redux';

import auth from './auth/reducer';
import registration from './registration/reducer';
import plan from './plans/reducer';
import student from './student/reducer';

export default combineReducers({
  auth,
  registration,
  plan,
  student,
});
