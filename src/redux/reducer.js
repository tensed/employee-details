const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

function setLoginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError,
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    sendLoginRequest(email, password)
      .then((success) => {
        dispatch(setLoginSuccess(true));
      })
      .catch((err) => {
        dispatch(setLoginError(err));
      });
  };
}

export default function reducer(
  state = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null,
  },
  action
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError,
      };
    default:
      return state;
  }
}

function sendLoginRequest(email, password) {
  return new Promise((resolve, reject) => {
    if (email === "hruday@gmail.com" && password === "hruday123") {
      return resolve(true);
    } else {
      return reject(new Error("Invalid email or password"));
    }
  });
}
