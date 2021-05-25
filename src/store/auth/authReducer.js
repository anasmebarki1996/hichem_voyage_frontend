import { LOGIN_SUCCESS, REGISTER, CHECK_TOKEN, LOGOUT } from "./authAction";

export const initialState = {
  email: "",
  name: "",
  isLoggedIn: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        name: action.name,
      };
    case REGISTER:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return {
        email: "",
        name: "",
        isLoggedIn: false,
      };
    case CHECK_TOKEN: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        name: action.name,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
