import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import registration from './registration/sagas';
import plan from './plans/sagas';
import student from './student/sagas';
import helporder from './helporders/sagas';

export default function* rootSaga() {
  return yield all([auth, registration, plan, student, helporder]);
}
