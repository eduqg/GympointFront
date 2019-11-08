import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  allstudents: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/CREATE_STUDENT_SUCCESS': {
        draft.student = action.payload.student;
        break;
      }

      case '@student/UPDATE_STUDENT_SUCCESS': {
        draft.student = action.payload.student;
        break;
      }

      case '@student/LOAD_ALL_STUDENTS_SUCCESS': {
        draft.allstudents = action.payload.allstudents;
        break;
      }

      case '@student/DELETE_STUDENT_SUCCESS': {
        draft.allstudents = draft.allstudents.filter(item => {
          return item.id !== action.payload.id;
        });
        break;
      }

      default:
    }
  });
}
