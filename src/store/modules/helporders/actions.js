// CREATE
export function createAnswerHelporderRequest(answer, id) {
  return {
    type: '@helporder/CREATE_ANSWER_HELPORDER_REQUEST',
    payload: { answer, id },
  };
}

export function createAnswerHelporderSuccess(helporder) {
  return {
    type: '@helporder/CREATE_ANSWER_HELPORDER_SUCCESS',
    payload: { helporder },
  };
}

export function createAnswerHelporderFailure() {
  return {
    type: '@helporder/CREATE_ANSWER_HELPORDER_FAILURE',
  };
}

// GET ALL HELPORDERS
export function loadAllHelpordersRequest() {
  return {
    type: '@helporder/LOAD_ALL_HELPORDERS_REQUEST',
  };
}

export function loadAllHelpordersSuccess(allhelporders) {
  return {
    type: '@helporder/LOAD_ALL_HELPORDERS_SUCCESS',
    payload: { allhelporders },
  };
}

export function loadAllHelpordersFailure() {
  return {
    type: '@helporder/LOAD_ALL_HELPORDERS_FAILURE',
  };
}

// GET ONE
export function loadOneHelporderRequest(id) {
  return {
    type: '@helporder/LOAD_ONE_HELPORDER_REQUEST',
    payload: { id },
  };
}

export function loadOneHelporderSuccess(helporder) {
  return {
    type: '@helporder/LOAD_ONE_HELPORDER_SUCCESS',
    payload: { helporder },
  };
}

export function loadOneHelporderFailure() {
  return {
    type: '@helporder/LOAD_ONE_HELPORDER_FAILURE',
  };
}

// GET ALL NOT ANSWERED
export function loadAllNotAnsweredHelpordersRequest() {
  return {
    type: '@helporder/LOAD_ALL_NOT_ANSWERED_HELPORDERS_REQUEST',
  };
}

export function loadAllNotAnsweredHelpordersSuccess(allhelporders) {
  return {
    type: '@helporder/LOAD_ALL_NOT_ANSWERED_HELPORDERS_SUCCESS',
    payload: { allhelporders },
  };
}

export function loadAllNotAnsweredHelpordersFailure() {
  return {
    type: '@helporder/LOAD_ALL_NOT_ANSWERED_HELPORDERS_FAILURE',
  };
}
