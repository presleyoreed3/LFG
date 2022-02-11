import React from 'react';

class EventDelete extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleSelect(e){
    e.preventDefault();
    this.props.deleteEvent(this.props.eventId)
      .then(() => {
        this.props.closeModal();
        let user = this.findUser(this.props.user.id);
        let newEvents = user.events.filter(evnt => evnt._id !== this.props.eventId)
        user.events = newEvents;
        this.props.updateUser(user);
      })
      .then(() => this.props.history.push('/home'))
  }

  findUser(userId) {
    return this.props.users.filter(user => user._id === userId)[0]
  }
  
  render() {
    return (
      <div className="delete-event">
        <div className="delete-event-message">Permanently delete this event?</div>
        <div className="delete-event-buttons">
          <button onClick={this.props.closeModal}>Cancel</button>
          <button onClick={this.handleSelect}>Delete</button>
        </div>
      </div>
    )
    
  }
}

export default EventDelete