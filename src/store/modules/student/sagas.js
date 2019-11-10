import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createStudentSuccess,
  createStudentFailure,
  updateStudentSuccess,
  updateStudentFailure,
  loadAllStudentsSuccess,
  loadAllStudentsFailure,
  deleteStudentSuccess,
  deleteStudentFailure,
} from './actions';

export function* createStudent({ payload }) {
  try {
    const response = yield call(api.post, '/students', payload);

    toast.success('Estudante criado com sucesso.');

    yield put(createStudentSuccess(response.data));

    history.push('/students');
  } catch (error) {
    toast.error(`Erro ao criar estudante: ${error.response.data.error}`);
    yield put(createStudentFailure());
  }
}

export function* updateStudent({ payload }) {
  try {
    const { name, email, idade, peso, altura, id } = payload;

    const data = {
      name,
      email,
      idade,
      peso,
      altura,
    };

    const response = yield call(api.put, `/students/${id}`, data);
    toast.success('Estudante atualizado com sucesso.');

    yield put(updateStudentSuccess(response.data));

    history.push('/students');
  } catch (error) {
    toast.error(`Erro ao atualizar estudante: ${error.response.data.error}`);
    yield put(updateStudentFailure());
  }
}

export function* loadStudents({ payload }) {
  try {
    const { search, page } = payload;
    let response = null;

    if (page) {
      response = yield api.get('students', {
        params: {
          page,
        },
      });
    } else if (search) {
      response = yield api.get(`students?q=${payload.search}`);
    } else {
      response = yield api.get('students');
    }

    if (response) {
      yield put(loadAllStudentsSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn('Você não possui estudantes criados');
    } else {
      toast.error(
        `Erro na requisição de estudantes: ${error.response.data.error}`
      );
    }
    yield put(loadAllStudentsFailure());
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/students`, {
      headers: { id },
    });

    yield put(deleteStudentSuccess(id));
    toast.warn('Estudante deletado.');
    history.push('/students');
  } catch (error) {
    toast.error(`Erro ao deletar estudante: ${error.response.data.error}`);
    yield put(deleteStudentFailure());
  }
}

export default all([
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
  takeLatest('@student/LOAD_ALL_STUDENTS_REQUEST', loadStudents),
  takeLatest('@student/DELETE_STUDENT_REQUEST', deleteStudent),
]);
