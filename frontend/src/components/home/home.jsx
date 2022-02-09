import React from "react";
import EventShow from "../event/events_show";
import HomeCalendar from './../calendar/calendar'
import IndexItem from '../index/index_item'
import './home.scss';
import {withRouter} from 'react-router-dom'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvents()
  }

  render() {
    if (!this.props.events) return null;
    const {events} = this.props;
    
    return <div className="home-page-container">
      <HomeCalendar events={events} className="calendar"/>
      <div className="events-index">
      <h1>Events</h1>
        {events.map(event => (
          <IndexItem 
            key={event._id}
            event={event}
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
  }
}

export default withRouter(Home);