const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  GOOGLE_SIGNIN_START: 'GOOGLE_SIGNIN_START',
  EMAIL_SIGNIN_START: 'EMAIL_SIGNIN_START',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS', // for both, Google and email sign in
  SIGNIN_FAILURE: 'SIGNIN_FAILURE', // for both, Google and email sign in
  CHECK_USER_SESSION: 'CHECK_USER_SESSION'
};

export default UserActionTypes;
