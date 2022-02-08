import React from "react";
import IndexItem from "../index/index_item";



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
    const eventStartTime = new Date(event.eventStart).toLocaleTimeString()
    const eventEndTime = new Date(event.eventEnd).toLocaleTimeString();

    return (
      <div className="home-page-container">
        <div className="event-show-container">
          <div className="event-title-desc">
            <p>{event.title}</p>
            <p>{event.description}</p>
          </div>
          <div className="event-gen-info">
            <p>
              {new Date(event.eventStart).toDateString()} +++++++{" "}
              {new Date(event.eventEnd).toLocaleTimeString()}
            </p>
            <p>{event.location}</p>
          </div>
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