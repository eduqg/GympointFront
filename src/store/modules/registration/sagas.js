import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { isBefore, setHours, setMinutes } from 'date-fns';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createRegistrationSuccess,
  createRegistrationFailure,
  updateRegistrationSuccess,
  updateRegistrationFailure,
  loadAllRegistrationsSuccess,
  loadAllRegistrationsFailure,
  deleteRegistrationSuccess,
  deleteRegistrationFailure,
} from './actions';

export function* createRegistration({ payload }) {
  try {
    const { start_date } = payload;

    if (isBefore(start_date, setMinutes(setHours(new Date(), 0), 0))) {
      toast.error('Você não pode matricular em uma data anterior a hoje');
      return;
    }

    const response = yield call(api.post, '/registrations', payload);

    toast.success('Matrícula efetuada com sucesso.');

    yield put(createRegistrationSuccess(response.data));

    history.push('/registrations');
  } catch (error) {
    toast.error(`Erro ao fazer matrícula: ${error.response.data.error}`);
    yield put(createRegistrationFailure());
  }
}

export function* updateRegistration({ payload }) {
  try {
    const { student_id, plan_id, start_date, id } = payload;

    console.tron.log('Payload: ', payload);

    if (isBefore(start_date, setMinutes(setHours(new Date(), 0), 0))) {
      toast.error('Você não pode matricular em uma data anterior a hoje');
      return;
    }

    const register = {
      student_id,
      plan_id,
      start_date,
    };

    const response = yield call(api.put, `/registrations/${id}`, register);
    console.tron.log('Response', response);
    toast.success('Matrícula atualizada com sucesso.');

    yield put(updateRegistrationSuccess(response.data));

    history.push('/registrations');
  } catch (error) {
    toast.error(`Erro ao atualizar matrícula: ${error.response.data.error}`);
    yield put(updateRegistrationFailure());
  }
}

export function* deleteRegistration({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/registrations/${id}`);

    yield put(deleteRegistrationSuccess(id));
    toast.warn('Matrícula deletada.');
    history.push('/registrations');
  } catch (error) {
    toast.error(`Erro ao deletar matrícula: ${error.response.data.error}`);
    yield put(deleteRegistrationFailure());
  }
}

export function* loadRegistrations({ payload }) {
  try {
    let response = [];
    const { page } = payload;
    console.tron.log('page', payload.page);
    if (page) {
      response = yield api.get('registrations', {
        params: {
          page,
        },
      });
    } else {
      response = yield api.get('registrations');
    }

    if (response) {
      yield put(loadAllRegistrationsSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn('Não existem matrículas cadastradas.');
    } else {
      toast.error(
        `Erro na requisição de matrículas: ${error.response.data.error}`
      );
    }
    yield put(loadAllRegistrationsFailure());
  }
}

export default all([
  takeLatest('@registration/CREATE_REGISTRATION_REQUEST', createRegistration),
  takeLatest('@registration/UPDATE_REGISTRATION_REQUEST', updateRegistration),
  takeLatest('@registration/LOAD_ALL_REGISTRATIONS_REQUEST', loadRegistrations),
  takeLatest('@registration/DELETE_REGISTRATION_REQUEST', deleteRegistration),
]);
