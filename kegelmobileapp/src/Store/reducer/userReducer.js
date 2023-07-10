import {TYPES} from '../../Utils/appStrings';
const INITIAL_STATE = {
  token: '',
  user: {},
};

function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.user:
      return {
        ...state,
        role: action.payload.role,
        token: action.payload.token,
        user: action.payload.user,
      };
    case TYPES.clearUserData: {
      return {
        ...state,
        token: '',
        user: {},
      };
    }
    default:
      return state;
  }
}
export default UserReducer;
