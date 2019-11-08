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
