import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createPlanSuccess,
  createPlanFailure,
  updatePlanSuccess,
  updatePlanFailure,
  loadAllPlansSuccess,
  loadAllPlansFailure,
  deletePlanSuccess,
  deletePlanFailure,
} from './actions';

export function* createPlan({ payload }) {
  try {
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

export function* updatePlan({ payload }) {
  try {
    const { title, duration, price, id } = payload;

    const data = {
      title,
      duration,
      price,
    };

    const response = yield call(api.put, `/plans/${id}`, data);
    toast.success('Plano atualizado com sucesso.');

    yield put(updatePlanSuccess(response.data));

    history.push('/plans');
  } catch (error) {
    toast.error(`Erro atualizar plano: ${error.response.data.error}`);
    yield put(updatePlanFailure());
  }
}

export function* loadPlans() {
  try {
    const response = yield api.get('plans');

    console.tron.log(response);
    if (response) {
      yield put(loadAllPlansSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn('Você não possui planos criados');
    } else {
      toast.error(`Erro na requisição de planos: ${error.response.data.error}`);
    }
    yield put(loadAllPlansFailure());
  }
}

export function* deletePlan({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/plans`, {
      headers: { id },
    });

    yield put(deletePlanSuccess(id));
    toast.warn('Plano deletado.');
    history.push('/plans');
  } catch (error) {
    toast.error(`Erro ao deletar plano: ${error.response.data.error}`);
    yield put(deletePlanFailure());
  }
}

export default all([
  takeLatest('@plan/CREATE_PLAN_REQUEST', createPlan),
  takeLatest('@plan/UPDATE_PLAN_REQUEST', updatePlan),
  takeLatest('@plan/LOAD_ALL_PLANS_REQUEST', loadPlans),
  takeLatest('@plan/DELETE_PLAN_REQUEST', deletePlan),
]);
