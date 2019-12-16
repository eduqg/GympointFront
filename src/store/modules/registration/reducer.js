import produce from 'immer';

const INITIAL_STATE = {
  registration: null,
  allregistrations: null,
  nextPageCount: 0,
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

      case '@registration/LOAD_ALL_REGISTRATIONS_SUCCESS': {
        draft.allregistrations = action.payload.allregistrations;
        draft.nextPageCount = action.payload.nextPageCount;
        break;
      }

      case '@registration/DELETE_REGISTRATION_SUCCESS': {
        draft.allregistrations = draft.allregistrations.filter(item => {
          return item.id !== action.payload.id;
        });
        break;
      }

      default:
    }
  });
}
