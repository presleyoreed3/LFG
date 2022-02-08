import axios from "axios";

export const getEvents = () => {
  return axios.get('/api/events')
};

export const getEvent = (eventId) => {
  return axios.get(`/api/events/${eventId}`)
};

export const createEvent = (event) => {
  return axios.post('/api/events', event)
};

export const updateEvent = (event) => {
  return axios.patch(`/api/events/${event.id}`, event)
};

export const deleteEvent = (eventId) => {
  return axios.delete(`/api/events/${eventId}`)
};

export const getUserEvents = (userId) => {
  return axios.get(`/api/events/user/${userId}`)
};