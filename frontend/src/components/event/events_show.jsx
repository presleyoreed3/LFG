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

    this.findEvent = this.findEvent.bind(this)
    this.checkAttendance = this.checkAttendance.bind(this)
    this.getOwnerName = this.getOwnerName.bind(this)
    this.collapseDescription = this.collapseDescription.bind(this)
    this.collapseUser = this.collapseUser.bind(this);
    this.addToAttendance = this.addToAttendance.bind(this);
    this.leaveAttendance = this.leaveAttendance.bind(this);
    
    this.dropDownClose();

  }

  componentDidMount() {
    this.props.fetchEvents();
  }


  checkAttendance(user){
    const event = this.findEvent()[0];
     if (event.attendees.includes(user._id)){
        return(<AttendanceIndexItem
          key={user._id}
          user={user}
        />)
      }
  }

  getOwnerName(userId){
    const event = this.findEvent()[0];
    for(let i = 0; i < this.props.users.length; i++){
      if (userId === this.props.users[i]._id){
        return (<p>Created By: {this.props.users[i].username}</p>)
      }
    }
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

  addToAttendance(e) {
    e.preventDefault();
    let event = this.findEvent()[0]
    event.attendees.push(this.props.currentUser.id)
    this.props.updateEvent(event)
  }

  leaveAttendance(e) {
    e.preventDefault();
    let event = this.findEvent()[0]
    let newArr = event.attendees.filter(id => id !== this.props.currentUser.id)
    event.attendees = newArr
    this.props.updateEvent(event)
  }

  checkLogin(){
    let attendees = this.findEvent()[0].attendees
    if (this.props.loggedIn && !attendees.includes(this.props.currentUser.id)){
      return(
        <button onClick={this.addToAttendance}>Join the Fun</button>
      )
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
              Update<i className="fa-solid fa-pencil"></i>
            </div>
            <div onClick={() => this.props.openModal('deleteEvent', this.props.match.params.eventId)}>
              Delete<i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

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

  findEvent() {
    return this.props.events.filter((event) => {
      return event._id === this.props.match.params.eventId
    })
  }

  render() {

    if (this.props.events.length === 0) return null;
    const event = this.findEvent()[0];
    
    const eventStartDate = new Date(event.eventStart).toDateString();
    const eventEndDate = new Date(event.eventEnd).toDateString();
    const eventStartTime = new Date(event.eventStart).toLocaleTimeString()
    const eventEndTime = new Date(event.eventEnd).toLocaleTimeString();
    const eventOwner = event.owner;


    return (
      <div className="home-page-container">
        <div className="event-show-left-container">
          {/* {this.checkOwner(eventOwner)} */}
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
                </div>
                <div>
                  <pre className="user-content">
                    {this.getOwnerName(event.owner)}
                  </pre>
                  <pre className="content">
                    {event.description}
                  </pre>
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
          <CommentIndexContainer eventId={event._id}/>
        </div>{/*
        <button className="test-button" onClick={() => this.props.openModal('eventForm', 1)}>Create</button>

        <button className="test-button" onClick={() => this.props.openModal('eventUpdateForm', this.props.match.params.eventId)}>Update</button>*/}

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