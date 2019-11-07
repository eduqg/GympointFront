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

    console.tron.log('Register', register);
    const response = yield call(api.post, '/registrations', register);

    console.tron.log('Response', response);
    toast.success('Matrícula efetuada com sucesso.');

    yield put(createRegistrationSuccess(response.data));
  } catch (error) {
    console.tron.log('Erro', error);
    toast.error('Erro ao fazer matrícula');
    yield put(createRegistrationFailure());
  }
}

export default all([
  takeLatest('@registration/CREATE_REGISTRATION_REQUEST', createRegistration),
]);
