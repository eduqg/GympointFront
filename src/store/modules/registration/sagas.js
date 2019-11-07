import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { isBefore, setHours, setMinutes } from 'date-fns';

import api from '../../../services/api';

import {
  createRegistrationSuccess,
  createRegistrationFailure,
} from './actions';

export function* createRegistration({ payload }) {
  try {
    const { student_id, plan_id, start_date } = payload;

    if (isBefore(start_date, setMinutes(setHours(new Date(), 0), 0))) {
      toast.error('Você não pode matricular em uma data anterior a hoje');
      return;
    }

    const register = {
      student_id,
      plan_id,
      start_date,
    };

    const response = yield call(api.post, '/registrations', register);

    toast.success('Matrícula efetuada com sucesso.');

    yield put(createRegistrationSuccess(response.data));
  } catch (error) {
    // Catching errors axios
    // https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
    // if (error.response) {
    //   /*
    //    * The request was made and the server responded with a
    //    * status code that falls out of the range of 2xx
    //    */
    //   console.tron.log(error.response.data);
    //   console.tron.log(error.response.status);
    //   console.tron.log(error.response.headers);
    // } else if (error.request) {
    //   /*
    //    * The request was made but no response was received, `error.request`
    //    * is an instance of XMLHttpRequest in the browser and an instance
    //    * of http.ClientRequest in Node.js
    //    */
    //   console.tron.log(error.request);
    // } else {
    //   // Something happened in setting up the request and triggered an Error
    //   console.tron.log('Error', error.message);
    // }
    toast.error(`Erro ao fazer matrícula: ${error.response.data.error}`);
    yield put(createRegistrationFailure());
  }
}

export default all([
  takeLatest('@registration/CREATE_REGISTRATION_REQUEST', createRegistration),
]);
