import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import registration from './registration/sagas';

export default function* rootSaga() {
  return yield all([auth, registration]);
}
