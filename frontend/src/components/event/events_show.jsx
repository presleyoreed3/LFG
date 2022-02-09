import React from "react";
import IndexItem from "../index/index_item";
import "./events.scss"
import Count from '../attendees/count'


class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: ''
    }
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

  checkLogin(){
    if (this.props.loggedIn){
      return(
        <button>Join the Fun</button>
      )
    }
  }

  collapse(){
    let col = document.getElementsByClassName("collapsible")
    col[0].classList.toggle("active");
    var content = col[0].nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }

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
            <hr />
            <div className="event-gen-info">
              <p>
                Date: {eventStartDate} {eventStartDate === eventEndDate ? "" : "to " + eventEndDate}
              </p>
              <p>From: {eventStartTime} to {eventEndTime}</p>
              <p className="event-show-location">Location:    
                 {event.eventType === 'Online' ? ' Online' : <a className="hover-underline-animation" href={`http://maps.google.com/?q=${event.location}`} target='_blank'> {event.location}</a>}
              </p>
            </div>
            <hr />
            <button onClick={() => this.collapse()} className="collapsible">View Details</button>
            <div className="content">
              {event.description}
            </div>
          </div>
          <div id="attendence">
            <Count event={event}/>
            {this.checkLogin()}
            <div>
              Attendees Go here
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