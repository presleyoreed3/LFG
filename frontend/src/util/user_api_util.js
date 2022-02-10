import axios from "axios";


export const getUsers = () => {
  return axios.get('/api/users')
};

export const updateUser = (user) => {
  return axios.patch(`/api/users/${user._id}`, user);
};