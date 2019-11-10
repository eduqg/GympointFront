import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createAnswerHelporderSuccess,
  createAnswerHelporderFailure,
  loadAllHelpordersSuccess,
  loadAllHelpordersFailure,
  loadOneHelporderSuccess,
  loadOneHelporderFailure,
} from './actions';

export function* createAnswer({ payload }) {
  try {
    // /help-orders/:id/answer
    // Payload also have answer
    const { id } = payload;

    const response = yield call(api.post, `/help-orders/${id}/answer`, payload);

    toast.success('Resposta criada com sucesso.');

    yield put(createAnswerHelporderSuccess(response.data));
  } catch (error) {
    toast.error(`Erro ao criar resposta: ${error.response.data.error}`);
    yield put(createAnswerHelporderFailure());
  }
}

export function* loadHelporders() {
  try {
    const response = yield api.get('help-orders');
    if (response) {
      yield put(loadAllHelpordersSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn('Não existem pedidos de auxílio criados');
    } else {
      toast.error(
        `Erro na requisição de pedidos de auxílio: ${error.response.data.error}`
      );
    }
    yield put(loadAllHelpordersFailure());
  }
}

export function* loadNotAnsweredHelporders() { }

export function* loadOne({ payload }) {
  try {
    const { id } = payload;
    const response = yield api.get(`help-orders/${id}`);
    if (response) {
      yield put(loadOneHelporderSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn('Não existe pedido de auxílio');
    } else {
      toast.error(
        `Erro na requisição do pedido de auxílio: ${error.response.data.error}`
      );
    }
    yield put(loadOneHelporderFailure());
  }
}

export default all([
  takeLatest('@helporder/CREATE_ANSWER_HELPORDER_REQUEST', createAnswer),
  takeLatest('@helporder/LOAD_ALL_HELPORDERS_REQUEST', loadHelporders),
  takeLatest(
    '@helporder/LOAD_ALL_NOT_ANSWERED_HELPORDERS_SUCCESS',
    loadNotAnsweredHelporders
  ),
  takeLatest('@helporder/LOAD_ONE_HELPORDER_REQUEST', loadOne),
]);
