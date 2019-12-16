// CREATE
export function createPlanRequest(title, duration, price) {
  return {
    type: '@plan/CREATE_PLAN_REQUEST',
    payload: { title, duration, price },
  };
}

export function createPlanSuccess(plan) {
  return {
    type: '@plan/CREATE_PLAN_SUCCESS',
    payload: { plan },
  };
}

export function createPlanFailure() {
  return {
    type: '@plan/CREATE_PLAN_FAILURE',
  };
}

// UPDATE
export function updatePlanRequest(title, duration, price, id) {
  return {
    type: '@plan/UPDATE_PLAN_REQUEST',
    payload: { title, duration, price, id },
  };
}

export function updatePlanSuccess(plan) {
  return {
    type: '@plan/UPDATE_PLAN_SUCCESS',
    payload: { plan },
  };
}

export function updatePlanFailure() {
  return {
    type: '@plan/UPDATE_PLAN_FAILURE',
  };
}

// GET ALL PLANS

export function loadAllPlansRequest(page) {
  return {
    type: '@plan/LOAD_ALL_PLANS_REQUEST',
    payload: { page },
  };
}

export function loadAllPlansSuccess(allplans, nextPageCount) {
  return {
    type: '@plan/LOAD_ALL_PLANS_SUCCESS',
    payload: { allplans, nextPageCount },
  };
}

export function loadAllPlansFailure() {
  return {
    type: '@plan/LOAD_ALL_PLANS_FAILURE',
  };
}

// GET ALL PLANS

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_PLAN_REQUEST',
    payload: { id },
  };
}

export function deletePlanSuccess(id) {
  return {
    type: '@plan/DELETE_PLAN_SUCCESS',
    payload: { id },
  };
}

export function deletePlanFailure() {
  return {
    type: '@plan/DELETE_PLAN_FAILURE',
  };
}
