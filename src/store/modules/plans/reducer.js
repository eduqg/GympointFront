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
        console.tron.log('no update', action.payload.plan);
        draft.plan = action.payload.plan;
        break;
      }

      case '@plan/LOAD_ALL_PLANS_SUCCESS': {
        console.tron.log('no success', action.payload.allplans);
        draft.allplans = action.payload.allplans;
        break;
      }

      default:
    }
  });
}
