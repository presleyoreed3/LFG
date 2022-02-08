import React from "react";

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
    if (!this.props.event) return null;
    
    return(
      <div className="test">

      </div>
    )
  }
}

export default EventShow