import React from "react";
import HomeCalendar from './../calendar/calendar'

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
      <HomeCalendar events={events}/>
    </div>
  }
}

export default Home;