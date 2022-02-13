import React from "react";
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import { withRouter } from "react-router-dom";
import './calendar.scss'

class HomeCalendar extends React.Component {

  formatEvents(events) {
    const newEvents = [];
    events.forEach((event) => {
      let eventObj = {
        title: event.title,
        start: event.eventStart,
        end: event.eventEnd,
        url: `/#/events/${event._id}`,
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
          events={events}
          eventTimeFormat={{hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'}}
        />
      </div>
    );
  }
}

export default withRouter(HomeCalendar);