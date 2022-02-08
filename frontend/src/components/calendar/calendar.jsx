import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { withRouter } from "react-router-dom";
import { Calendar } from "@fullcalendar/core";
import './calendar.scss'

class HomeCalendar extends React.Component {

  // componentDidMount() {
  //   const calendar = document.getElementById('calendar')
  //   const events = [{ title: "event 1", date: "2022-02-08", url: "/#/login" }];
  //   this.createCal(calendar, events)
  // }

  // createCal(calendar, events) {
  //   let cal = new FullCalendar.Calendar(calendar, {
  //     plugins: [dayGridPlugin, interactionPlugin],
  //     events: events
  //   })
  //   return cal;
  // }

  render() {
    const events = [{title: 'event 1', date: '2022-02-08', url: "/#/login"}]

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