import produce from 'immer';

const INITIAL_STATE = {
  helporder: null,
  allhelporders: null,
};

export default function helporder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helporder/CREATE_ANSWER_HELPORDER_SUCCESS': {
        draft.helporder = action.payload.helporder;
        break;
      }

      case '@helporder/LOAD_ALL_HELPORDERS_SUCCESS': {
        draft.allhelporders = action.payload.allhelporders;
        break;
      }

      case '@helporder/LOAD_ALL_NOT_ANSWERED_HELPORDERS_SUCCESS': {
        draft.allhelporders = action.payload.allhelporders;
        break;
      }

      case '@helporder/LOAD_ONE_HELPORDER_SUCCESS': {
        draft.helporder = action.payload.helporder;
        break;
      }

      default:
    }
  });
}
