import { getEvents } from "../util/event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}

export const fetchTweets = () => dispatch => (
  getEvents()
    .then(events => dispatch(receiveEvents(events)))
    .catch(err => console.log(err))
)