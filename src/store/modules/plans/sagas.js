import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { createPlanSuccess, createPlanFailure } from './actions';

export function* createPlan({ payload }) {
  try {
    console.tron.log('Chegou');
    const { title, duration, price } = payload;

    const data = { title, duration, price };

    yield call(api.post, '/plans', data);

    toast.success('Plano criado com sucesso.');

    yield put(createPlanSuccess(data));

    history.push('/plans');
  } catch (error) {
    toast.error(`Erro ao criar plano: ${error.response.data.error}`);
    yield put(createPlanFailure());
  }
}

export default all([takeLatest('@plan/CREATE_PLAN_REQUEST', createPlan)]);
