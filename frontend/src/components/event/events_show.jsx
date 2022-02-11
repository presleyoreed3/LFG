import React from "react";
import IndexItem from "../index/index_item";
import CommentIndexContainer from "../comments/comment_index_container";
import "./events.scss"
import Count from '../attendees/count'
import AttendanceIndexItem from '../attendees/attendance'

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: ''
    }

    this.findEvent = this.findEvent.bind(this);
    this.checkAttendance = this.checkAttendance.bind(this);
    this.getOwnerName = this.getOwnerName.bind(this);
    this.collapseDescription = this.collapseDescription.bind(this)
    this.collapseUser = this.collapseUser.bind(this);
    this.collapseComments = this.collapseComments.bind(this);
    this.addToAttendance = this.addToAttendance.bind(this);
    this.leaveAttendance = this.leaveAttendance.bind(this);
    this.findUser = this.findUser.bind(this);
    this.listEvents = this.listEvents.bind(this);
    this.dropDownClose();

  }

  componentDidMount() {
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

  checkAttendance(user){
    const event = this.findEvent();
     if (event.attendees.includes(user._id)){
        return(<AttendanceIndexItem
          key={user._id}
          user={user}
          currentUser={this.props.currentUser}
          updateUser={this.props.updateUser}
          users={this.props.users}
        />)
      }
  }

  getOwnerName(userId){
    const event = this.findEvent();
    for(let i = 0; i < this.props.users.length; i++){
      if (userId === this.props.users[i]._id){
        return (<p>Created By: {this.props.users[i].username}</p>)
      }
    }
  }

  handleSelect(e, type) {
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
    if (!target) return []; // DOUBLE CHECK
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

  dropDownClose() {
    document.addEventListener("click", (event) => {
      if (!event.target.matches('.dropbtn') && !event.target.matches('.fa-bars')) {
        let dropdown = document.getElementsByClassName("dropdown-content")[0];
        if(dropdown) {
          dropdown.classList.add("hidden");
          let button = document.getElementsByClassName('dropbtn')[0];
          button.classList.remove("clicked");
        }
      }
    })
  }

  findUser(userId) {
    return this.props.users.filter(user => user._id === userId)[0]
  }

  addToAttendance(e) {
    e.preventDefault();
    let event = this.findEvent();
    event.attendees.push(this.props.currentUser.id);
    this.props.updateEvent(event);

    let userId = this.props.currentUser.id;
    let user = this.findUser(userId);
    let pushEvent = {};
    pushEvent["title"] = event.title;
    pushEvent["eventStart"] = event.eventStart;
    pushEvent["eventEnd"] = event.eventEnd;
    pushEvent["location"] = event.location;
    pushEvent["website"] = event.website;
    pushEvent["limit"] = event.limit;
    pushEvent["owner"] = event.owner;
    pushEvent["eventType"] = event.eventType;
    pushEvent["category"] = event.category;
    pushEvent["_id"] = event._id;
    pushEvent["description"] = event.description;
    user.events.push(pushEvent);
    this.props.updateUser(user);
  }

  leaveAttendance(e) {
    e.preventDefault();
    let event = this.findEvent();
    let newAttend = event.attendees.filter(id => id !== this.props.currentUser.id);
    event.attendees = newAttend;
    this.props.updateEvent(event);
    
    let userId = this.props.currentUser.id;
    let user = this.findUser(userId);
    let newEvents = user.events.filter(evnt => evnt._id !== event._id);
    user.events = newEvents;
    this.props.updateUser(user);
  }

  checkLogin(){
    let attendees = this.findEvent().attendees
    if (this.props.loggedIn && !attendees.includes(this.props.currentUser.id)){
      return(
        <button onClick={this.addToAttendance}>Join the Fun</button>
      )
    } else if (!this.props.loggedIn || this.findEvent().owner === this.props.currentUser.id) {
      return
    } else {
      return <button onClick={this.leaveAttendance} className="attend-leave-button">Leave the Fun</button>
    }
  }

  handleDropdown() {
    let dropdown = document.getElementById('myDropdown')
    dropdown.classList.toggle("hidden");
    let button = document.getElementsByClassName('dropbtn')[0];
    button.classList.contains('clicked') ? button.classList.remove('clicked') : button.classList.add('clicked')
  }

  checkOwner(owner){
    if (!this.props.currentUser) return
    if (this.props.currentUser.id === owner) {
      return (
        <div className="dropdown">
          <div onClick={this.handleDropdown} className="dropbtn">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div id="myDropdown" className="dropdown-content hidden">
            <div onClick={() => this.props.openModal('eventUpdateForm', this.props.match.params.eventId)}>
              <i className="fa-solid fa-pencil"></i> Update
            </div>
            <div onClick={() => this.props.openModal('deleteEvent', this.props.match.params.eventId)}>
              <i className="fa-solid fa-trash-can"></i> Delete
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  // Following 3 Methods collapse the tiles on the events show
  collapseDescription(){
    let col = document.getElementsByClassName("collapsible-description")
    col[0].classList.toggle("active");
    var content = document.getElementsByClassName("content");
    if (content[0].style.display === "block") {
      content[0].style.display = "none";
    } else {
      content[0].style.display = "block";
    }
  }

  collapseUser(){
    let col = document.getElementsByClassName("collapsible-user")
    col[0].classList.toggle("active");
    var content = document.getElementsByClassName("user-content");
    if (content[0].style.display === "block") {
      content[0].style.display = "none";
    } else {
      content[0].style.display = "block";
    }
  }

  collapseComments(){
    let col = document.getElementsByClassName("collapsible-comments")
    col[0].classList.toggle("active");
    var content = document.getElementsByClassName("comment-index-container");
    if (content[0].style.display === "block") {
      content[0].style.display = "none";
    } else {
      content[0].style.display = "block";
    }
  }

  findEvent() {
    let selectedEvent;
    this.props.events.forEach((event, idx) => {
      if(event._id === this.props.match.params.eventId) {
        event["index"] = idx;
        selectedEvent = event;
      }
    })
    return selectedEvent;
  }

  render() {

    if (this.props.events.length === 0) return null;
    const event = this.findEvent();
    
    const eventStartDate = new Date(event.eventStart).toDateString();
    const eventEndDate = new Date(event.eventEnd).toDateString();
    const eventStartTime = new Date(event.eventStart).toLocaleTimeString()
    const eventEndTime = new Date(event.eventEnd).toLocaleTimeString();
    const eventOwner = event.owner;


    return (
      <div className="home-page-container">
        <div className="event-show-left-container">
          <div id="event" className="event-show-container">
            {this.checkOwner(eventOwner)}
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
              <div className="details-menu">
                <div id="reveal-buttons"> 
                  <p onClick={() => this.collapseUser()} className="hover-underline-animation collapsible-user">Creator</p>
                  <p onClick={() => this.collapseDescription()} className="hover-underline-animation collapsible-description">Description</p>
                  <p onClick={() => this.collapseComments()} className="hover-underline-animation collapsible-comments">Comments</p>
                </div>
                <hr />
                <div id='details-container'>
                  <pre className="user-content">
                    {this.getOwnerName(event.owner)}
                  </pre>
                  <pre className="content">
                    {event.description}
                  </pre>
                  <CommentIndexContainer 
                    className="comments" 
                    eventId={event._id}
                  />
                </div>
              </div>
            </div>
            <div id="attendence">
              <Count event={event}/>
              {this.checkLogin()}
              <div className="attendence-list">
                <h3>Members</h3>
                {this.props.users.map(user => (
                  this.checkAttendance(user)
                ))}
              </div>
            </div>
          </div>
          
        </div>
        <div className="events-index">
          <div className="events-header">
            <h2 className="event-choice event-selected" id="all" onClick={(e) => this.handleSelect(e)}>All Events</h2>
            <h2 className="event-choice" id="friend" onClick={(e) => this.handleSelect(e)}>Friend Events</h2>
            <h2 className="event-choice" id="my" onClick={(e) => this.handleSelect(e)}>My Events</h2>
          </div>
          {this.listEvents()}
        </div>
      </div>
    );
  }
}

export default EventShow