import React from "react";
import IndexItem from "../index/index_item";
import CommentIndexContainer from "../comments/comment_index_container";
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

    // if (!this.props.event) return null;
    if (this.props.events.length === 0) return null;
    // {console.log(this.props.events)}
    // {console.log(this.props.match.params.eventId)}
    const event = this.findEvent()[0]
    const eventStartDate = new Date(event.eventStart).toDateString();
    const eventEndDate = new Date(event.eventEnd).toDateString();
    const eventStartTime = new Date(event.eventStart).toLocaleTimeString()
    const eventEndTime = new Date(event.eventEnd).toLocaleTimeString();

    return (
      <div className="home-page-container">
        <div className="event-show-container">
          <div className="event-title">
            <p>{event.title}</p>
          </div>
          <div className="event-gen-info">
            <p>
              {eventStartDate} {eventStartDate === eventEndDate ? "" : "to " + eventEndDate}
            </p>
            <p>From: {eventStartTime} to {eventEndTime}</p>
            <p>Location: {event.location}</p>
          </div>
          <div className="event-desc">
            {event.description}
          </div>
          <CommentIndexContainer eventId={event._id}/>
        </div>
        <div className="events-index">
          <h1>Events</h1>
          {this.props.events.map((event) => (
            <IndexItem
              key={event._id}
              title={event.title}
              category={event.category}
              eventType={event.eventType}
              start={event.eventStart}
              end={event.eventEnd}
              limit={event.limit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EventShow