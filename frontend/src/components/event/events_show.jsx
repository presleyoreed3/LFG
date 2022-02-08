import React from "react";
import IndexItem from "../index/index_item";



class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
  //     this.componentDidMount();
  //   }
  // }

  render() {

    // if (!this.props.event) return null;
    if (!this.props.events) return null;
    // {console.log(this.props.events)}
    // {console.log(this.props.match.params.eventId)}

    return(
        <div className="home-page-container">
              <div className="events-index">
              <h1>Events</h1>
                {this.props.events.map(event => (
                  <IndexItem 
                    key={event._id}
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
    )
  }
}

export default EventShow