import * as EventAPIUtil from "../util/event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event
  }
}

export const receiveNewEvent = (event) => {
  return {
    type: RECEIVE_NEW_EVENT,
    event
  }
}

export const removeEvent = () => {
  return {
    type: REMOVE_EVENT
  }
}

export const fetchEvents = () => dispatch => (
  EventAPIUtil.getEvents()
    .then(events => dispatch(receiveEvents(events)))
    .catch(err => console.log(err))
)

export const fetchEvent = (eventId) => dispatch => {
  EventAPIUtil.getEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
    .catch(err => console.log(err))
}

export const createEvent = (event) => dispatch => (
  EventAPIUtil.createEvent(event)
    .then(event => dispatch(receiveNewEvent(event)))
    .catch(err => console.log(err))
)

export const updateEvent = (event) => dispatch => {
  return EventAPIUtil.updateEvent(event)
    .then((event) => dispatch(receiveEvent(event)))
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId) => dispatch => (
  EventAPIUtil.deleteEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
    .catch(err => console.log(err))
)
