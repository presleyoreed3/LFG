import React from "react";
import EventShow from "../event/events_show";
import HomeCalendar from './../calendar/calendar'
import './home.scss'

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
      <div className="home-left-container">
        <HomeCalendar  events={events}/>
      </div>
    </div>
  }
}

export default Home;