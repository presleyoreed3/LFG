import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_EVENT_COMMENTS = "RECEIVE_EVENT_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveEventComments = comments => {
  return {
    type: RECEIVE_EVENT_COMMENTS,
    comments
  }
}

export const receiveNewComment = comment => {
  return {
    type: RECEIVE_NEW_COMMENT,
    comment
  }
}

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}


export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

export const receiveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}

export const fetchEventComments = (eventId) => dispatch => (
  CommentAPIUtil.getEventComments(eventId)
    .then(comments => dispatch(receiveEventComments(comments)))
    .catch(err => console.log(err))
)

export const createComment = (comment) => (dispatch) => {
  return CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveNewComment(comment)))
    .catch(err =>dispatch(receiveCommentErrors(err.response.data)))
}

export const updateComment = (comment) => dispatch => (
  CommentAPIUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err =>dispatch(receiveCommentErrors(err.response.data)))
)

export const deleteComment = (commentId) => dispatch => (
  CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
    .catch(err => console.log(err))
)

