import produce from 'immer';

const INITIAL_STATE = {
  registration: null,
};

export default function registration(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/CREATE_REGISTRATION_SUCCESS': {
        draft.registration = action.payload.registration;
        break;
      }
      case '@registration/UPDATE_REGISTRATION_SUCCESS': {
        draft.registration = action.payload.registration;
        break;
      }
      default:
    }
  });
}
