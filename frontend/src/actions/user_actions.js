import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const fetchUsers = () => dispatch => (
  UserAPIUtil.getUsers()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => console.log(err))
)

export const updateUser = (user) => (dispatch) => {
  return UserAPIUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)))
    .catch((err) => console.log(err));
};