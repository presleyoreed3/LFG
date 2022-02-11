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
      .then(() => this.props.fetchUsers())
  }

   handleSelect(e) {
    e.preventDefault();
    let elements = Array.from(document.getElementsByClassName('event-choice'));
    elements.forEach((ele) => {
      if(ele.classList.contains('event-selected')) ele.classList.remove('event-selected')
    })
    e.currentTarget.classList.add('event-selected');
    this.setState({render: "1"})
  }

  filterEvents() {
    let newEvents = [];
    let friendEvents = {};
    let events = this.props.events;
    
    let target = document.querySelector('.event-selected')
    if (!target) return [];
    if(target.id === "my") {
      events.forEach((event) => {
        if(event.owner === this.props.currentUser.id || event.attendees.includes(this.props.currentUser.id)) {
          newEvents.push(event);
        }
      })
      return newEvents;
    } else if(target.id === "friend") {
      let user = this.findUser(this.props.currentUser.id);
      user.friends.forEach(friend => {
        let foundFriend = this.findUser(friend._id)
        friendEvents[foundFriend.username] = [];
        foundFriend.events.forEach(event => friendEvents[foundFriend.username].push(event))
      })
      return friendEvents;
    } 
    else {
      newEvents = this.props.events;
      return newEvents;
    }
  }

  listEvents(){
    let filtered = this.filterEvents();
    
    if(Array.isArray(filtered)) {
      return filtered.map((event) => (
        <IndexItem
          key={event._id}
          event={event}
        />
      ))
    } else {
      let friends = Object.keys(filtered);
      return friends.map((friend, idx) => {
        if(filtered[friend].length === 0) return;
        return (
          <div key={idx} id="friend-category">
            <h2>{friend}</h2>
            {this.createIndexItems(filtered, friend)}
          </div>
        )
      })
    }
  }

  createIndexItems(filtered, friend){
    return filtered[friend].map(event =>  {
      return (
          <IndexItem
            key={event._id}
            event={event}
          />
      )
    })
  }

  findUser(userId) {
    return this.props.users.filter(user => user._id === userId)[0];
  }

  calendarEvents() {
    let filtered = this.filterEvents();

    if(Array.isArray(filtered)) return filtered;
  
    let events = [];
    Object.values(filtered).forEach(array => {
      events = events.concat(array)
    })

    return events
  }

  checkLoggedIn() {
    let header;
    if(this.props.loggedIn) {
      header = <div className="events-index">
                  <div className="events-header">
                    <h2 className="event-choice event-selected" id="all" onClick={(e) => this.handleSelect(e)}>All Events</h2>
                    <h2 className="event-choice" id="friend" onClick={(e) => this.handleSelect(e)}>Friend Events</h2>
                    <h2 className="event-choice" id="my" onClick={(e) => this.handleSelect(e)}>My Events</h2>
                  </div>
                  {this.listEvents()}
                </div>
    } else {
      header = <div className="events-index">
                <div className="events-header">
                  <h2 className="event-choice event-selected" id="all" onClick={(e) => this.handleSelect(e)}>All Events</h2>
                </div>
                {this.listEvents()}
              </div>
    }
    return header;
  }

  render() {
    if (!this.props.events) return null;
    
    return <div className="home-page-container">
      <HomeCalendar events={this.calendarEvents()} className="calendar"/>
      {this.checkLoggedIn()}
    </div>
  }
}

export default withRouter(Home);