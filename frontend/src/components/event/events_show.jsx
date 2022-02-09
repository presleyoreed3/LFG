import React from "react";
import IndexItem from "../index/index_item";
import "./events.scss"



class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.findEvent = this.findEvent.bind(this)
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
  //     this.componentDidMount();
  //   }
  // }

  findEvent() {
    return this.props.events.filter((event) => {
      return event._id === this.props.match.params.eventId
    })
  }

  render() {

    if (this.props.events.length === 0) return null;
    const event = this.findEvent()[0]
    const eventStartDate = new Date(event.eventStart).toDateString();
    const eventEndDate = new Date(event.eventEnd).toDateString();
    const eventStartTime = new Date(event.eventStart).toLocaleTimeString()
    const eventEndTime = new Date(event.eventEnd).toLocaleTimeString();

    return (
      <div className="home-page-container">
        <div id="event" className="event-show-container">
          <div id="details">
            <div className="event-title">
              <h3>{event.title}</h3>
            </div>
            <div className="event-gen-info">
              <p>
                Date: {eventStartDate} {eventStartDate === eventEndDate ? "" : "to " + eventEndDate}
              </p>
              <p>From: {eventStartTime} to {eventEndTime}</p>
              <p className="event-show-location">Location:    
                 {event.eventType === 'Online' ? ' Online' : <a href={`http://maps.google.com/?q=${event.location}`} target='_blank'> {event.location}</a>}
              </p>
            </div>
            <div className="event-desc">
              {event.description}
            </div>
          </div>
          <div id="counter">
            <div id="limit">
              <p>{event.limit - event.attendees.length}</p>
              <h4>Spots:</h4>
            </div>
            <div id="goal">
              <p>{event.limit}</p>
              <h4>Goal:</h4>
            </div>
          </div>
        </div>
        <div className="events-index">
          <h1>Events</h1>
          {this.props.events.map((event) => (
            <IndexItem
              key={event._id}
              event={event}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EventShow