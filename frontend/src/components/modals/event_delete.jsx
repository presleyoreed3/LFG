import React from 'react';

class EventDelete extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    e.preventDefault();
    this.props.deleteEvent(this.props.eventId)
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/home'))
  }
  
  render() {
    return (
      <div>
        <div>Are you sure you want to delete this event?</div>
        <div>
          <button onClick={this.props.closeModal}>Cancel</button>
          <button onClick={this.handleSelect}>Delete</button>
        </div>
      </div>
    )
    
  }
}

export default EventDelete