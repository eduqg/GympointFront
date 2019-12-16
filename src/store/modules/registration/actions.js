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

// UPDATE
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

// GET ALL REGISTRATIONS

export function loadAllRegistrationsRequest(page) {
  return {
    type: '@registration/LOAD_ALL_REGISTRATIONS_REQUEST',
    payload: { page },
  };
}

export function loadAllRegistrationsSuccess(allregistrations, nextPageCount) {
  return {
    type: '@registration/LOAD_ALL_REGISTRATIONS_SUCCESS',
    payload: { allregistrations, nextPageCount },
  };
}

export function loadAllRegistrationsFailure() {
  return {
    type: '@registration/LOAD_ALL_REGISTRATIONS_FAILURE',
  };
}

// DELETE REGISTRATION

export function deleteRegistrationRequest(id) {
  return {
    type: '@registration/DELETE_REGISTRATION_REQUEST',
    payload: { id },
  };
}

export function deleteRegistrationSuccess(id) {
  return {
    type: '@registration/DELETE_REGISTRATION_SUCCESS',
    payload: { id },
  };
}

export function deleteRegistrationFailure() {
  return {
    type: '@registration/DELETE_REGISTRATION_FAILURE',
  };
}
