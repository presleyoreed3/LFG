import React from "react";
import EventShow from "../event/events_show";
import HomeCalendar from './../calendar/calendar'
import IndexItem from '../index/index_item'
import './home.scss';
import {withRouter} from 'react-router-dom'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: this.props.events }
  }

  componentDidMount(){
    this.props.fetchEvents()
      .then(() => {
        let choices = ["all", "friends", "my"];
        let elements = Array.from(document.getElementsByClassName('event-choice'));
        elements.forEach((el, idx) => {
          if(el.classList.contains('event-selected')) {
            this.setState({events: this.filterEvents(this.props.events, choices[idx])})
          }
        })
      })
  }

  // componentDidUpdate(){
  //   let choices = ["all", "friends", "my"];
  //   let elements = Array.from(document.getElementsByClassName('event-choice'));
  //   elements.forEach((el, idx) => {
  //     if(el.classList.contains('event-selected')) {
  //       this.setState({events: this.filterEvents(this.props.events, choices[idx])})
  //     }
  //   })
  // }

  handleSelect(e, type) {
    e.preventDefault();
    let elements = Array.from(document.getElementsByClassName('event-choice'));
    let selected = Array.from(document.getElementsByClassName('event-selected'));
    if(selected.length === 0) elements[0].classList.add('event-selected');
    elements.forEach((ele) => {
      if(ele.classList.contains('event-selected')) ele.classList.remove('event-selected')
    })
    e.currentTarget.classList.add('event-selected');
    this.setState({events: this.filterEvents(this.props.events, type)})
  }

  filterEvents(events, type) {
    let newEvents = [];
    if(type === "my") {
      events.map((event) => {
        if(event.owner === this.props.currentUser.id || event.attendees.includes(this.props.currentUser.id)) {
          newEvents.push(event);
        }
      })
    } else {
      newEvents = this.props.events;
    }
    return newEvents
  }

  render() {
    if (!this.props.events) return null;
    // const {events} = this.props;
    
    return <div className="home-page-container">
      <HomeCalendar events={this.state.events} className="calendar"/>
      <div className="events-index">
        <div className="events-header">
          <h2 className="event-choice event-selected" onClick={(e) => this.handleSelect(e, "all")}>All Events</h2>
          <h2 className="event-choice" onClick={(e) => this.handleSelect(e, "friends")}>Friend Events</h2>
          <h2 className="event-choice" onClick={(e) => this.handleSelect(e, "my")}>My Events</h2>
        </div>
          {this.state.events.map(event => (
            <IndexItem 
              key={event._id}
              event={event}
            />
          ))}
      </div>
    </div>
  }
}

export default withRouter(Home);