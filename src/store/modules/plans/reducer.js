import produce from 'immer';

const INITIAL_STATE = {
  plan: null,
  allplans: null,
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/CREATE_PLAN_SUCCESS': {
        draft.plan = action.payload.plan;
        break;
      }

      case '@plan/UPDATE_PLAN_SUCCESS': {
        draft.plan = action.payload.plan;
        break;
      }

      case '@plan/LOAD_ALL_PLANS_SUCCESS': {
        draft.allplans = action.payload.allplans;
        break;
      }

      case '@plan/DELETE_PLAN_SUCCESS': {
        draft.allplans = draft.allplans.filter(item => {
          return item.id !== action.payload.id;
        });
        break;
      }

      default:
    }
  });
}
