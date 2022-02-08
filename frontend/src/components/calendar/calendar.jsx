import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { withRouter } from "react-router-dom";
import { Calendar } from "@fullcalendar/core";
import './calendar.scss'

class HomeCalendar extends React.Component {

  formatEvents(events) {
    const newEvents = [];
    events.forEach((event) => {
      let eventObj = {
        title: event.name,
        start: event.eventStart,
        end: event.eventEnd,
      }
      newEvents.push(eventObj)
    })
    return newEvents
  }

  render() {
    const events = this.formatEvents(this.props.events)

    return (
      <div id="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={this.handleDateClick}
          events={events}
        />

      </div>
     
   
    );
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

export default withRouter(HomeCalendar);