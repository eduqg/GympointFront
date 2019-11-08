// CREATE
export function createStudentRequest(name, email, idade, peso, altura) {
  return {
    type: '@student/CREATE_STUDENT_REQUEST',
    payload: { name, email, idade, peso, altura },
  };
}

export function createStudentSuccess(student) {
  return {
    type: '@student/CREATE_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function createStudentFailure() {
  return {
    type: '@student/CREATE_STUDENT_FAILURE',
  };
}

// UPDATE
export function updateStudentRequest(name, email, idade, peso, altura, id) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { name, email, idade, peso, altura, id },
  };
}

export function updateStudentSuccess(student) {
  return {
    type: '@student/UPDATE_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function updateStudentFailure() {
  return {
    type: '@student/UPDATE_STUDENT_FAILURE',
  };
}

// GET ALL STUDENTS

export function loadAllStudentsRequest() {
  return {
    type: '@student/LOAD_ALL_STUDENTS_REQUEST',
  };
}

export function loadAllStudentsSuccess(allstudents) {
  return {
    type: '@student/LOAD_ALL_STUDENTS_SUCCESS',
    payload: { allstudents },
  };
}

export function loadAllStudentsFailure() {
  return {
    type: '@student/LOAD_ALL_STUDENTS_FAILURE',
  };
}

// GET ALL STUDENTS

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_STUDENT_REQUEST',
    payload: { id },
  };
}

export function deleteStudentSuccess(id) {
  return {
    type: '@student/DELETE_STUDENT_SUCCESS',
    payload: { id },
  };
}

export function deleteStudentFailure() {
  return {
    type: '@student/DELETE_STUDENT_FAILURE',
  };
}
