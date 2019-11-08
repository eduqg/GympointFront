export function createRegistrationRequest(student_id, plan_id, start_date) {
  return {
    type: '@registration/CREATE_REGISTRATION_REQUEST',
    payload: { student_id, plan_id, start_date },
  };
}

export function createRegistrationSuccess(registration) {
  return {
    type: '@registration/CREATE_REGISTRATION_SUCCESS',
    payload: { registration },
  };
}

export function createRegistrationFailure() {
  return {
    type: '@registration/CREATE_REGISTRATION_FAILURE',
  };
}

export function updateRegistrationRequest(student_id, plan_id, start_date, id) {
  return {
    type: '@registration/UPDATE_REGISTRATION_REQUEST',
    payload: { student_id, plan_id, start_date, id },
  };
}

export function updateRegistrationSuccess(registration) {
  return {
    type: '@registration/UPDATE_REGISTRATION_SUCCESS',
    payload: { registration },
  };
}

export function updateRegistrationFailure() {
  return {
    type: '@registration/UPDATE_REGISTRATION_FAILURE',
  };
}
