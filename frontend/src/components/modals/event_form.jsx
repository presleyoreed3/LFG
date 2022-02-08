import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      eventStart: '',
      eventEnd: '',
      location: '',
      website: '',
      limit: '',
      owner: this.props.user.id,
      eventType: '',
      category: '',
      attendees: [this.props.user.id]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
    this.setState({
      title: '',
      description: '',
      eventStart: '',
      eventEnd: '',
      location: '',
      website: '',
      limit: '',
      owner: this.props.user.id,
      eventType: '',
      category: '',
      attendees: [this.props.user.id]
    })
  }

  render() {
    return (
      <div>
        <h2>Create an Event</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" />
          </label>
          <label>Description
            <input type="text" onChange={this.update('description')} value={this.state.description}/>
          </label>
          <label>Event Start
            <input type="datetime-local" value={this.state.eventStart} onChange={this.update('eventStart')}/>
          </label>
          <label>Event End
            <input type="datetime-local" value={this.state.eventEnd} onChange={this.update('eventEnd')}/>
          </label>
          <label>Event Type
            <select>
              <option value="default" disabled="true">Select an event type</option>
              <option value="Online" onChange={this.update('eventType')}>Online</option>
              <option value="In-Person" onChange={this.update('eventType')}>In-Person</option>
            </select>
          </label>
          <label>Category
            <select>
              <option value="default" disabled="true">Select a category</option>
              <option value="Sport" onChange={this.update('category')}>Sport</option>
              <option value="Gaming" onChange={this.update('category')}>Gaming</option>
              <option value="Board-Game" onChange={this.update('category')}>Board-Game</option>
            </select>
          </label>
          <label>Location
            <input type="text" onChange={this.update('location')} value={this.state.location}/>
          </label>
          <label>Limit
            <input type="number" onChange={this.update('limit')} value={this.state.limit}/>
          </label>
        </form>
      </div>
    )
  }
}

export default EventForm