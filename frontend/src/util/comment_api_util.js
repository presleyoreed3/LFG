import axios from 'axios';

export const getEventComments = eventId => {
  return axios.get(`/api/comments/event/${eventId}`)
}

export const getComments = () => {
  return axios.get('/api/comments')
}

export const getComment = (commentId) => {
  return axios.get(`/api/comments/${commentId}`)
}

export const createComment = (comment) => {
  return axios.post(`/api/comments`, comment)
}

export const updateComment = (comment) => {
  return axios.patch(`/api/comments/${comment.id}`, comment)
}

export const deleteComment = (commentId) => {
  return axios.delete(`/api/comments/${commentId}`)
}