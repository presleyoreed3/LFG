import React from 'react';
import {withRouter} from 'react-router-dom';

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
    this.handleCategory = this.handleCategory.bind(this);
    this.handleEventType = this.handleEventType.bind(this);
    this.findUser = this.findUser.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  findUser(userId) {
    return this.props.users.filter(user => user._id === userId)[0]
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state)
      .then((event) => {
        this.props.history.push(`/events/${event.event.data._id}`);
        let user = this.findUser(this.props.user.id);
        user.events.push(event.event.data);
        this.props.updateUser(user);
      });
    
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
    this.props.closeModal();
  }

  handleCategory(e) {
    let selected = Array.from(document.getElementsByClassName('category-selector'))
    selected.forEach((input) => {
      if (input.selected) this.setState({category: e.currentTarget.value})
    })
  }

  handleEventType(e) {
    let selected = Array.from(document.getElementsByClassName('eventType-selector'))
    selected.forEach((input) => {
      if (input.selected) this.setState({eventType: e.currentTarget.value})
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="event-form">
          <div id="modal-top">
          <h2>Create an LFG</h2>
            <div onClick={this.props.closeModal} className="close">&times;</div>
          </div>
          <input
            placeholder="Event Title"
            type="text"
            onChange={this.update("title")}
            value={this.state.title}
          />
          <textarea
            placeholder="Description of the event"
            onChange={this.update("description")}
            value={this.state.description}
          >
            {this.state.description}
          </textarea>
          <div id="date-selectors">
            <div id="date">
              <label>Start</label>
              <input
                id="date-input"
                type="datetime-local"
                value={this.state.eventStart}
                onChange={this.update("eventStart")}
              />
            </div>
            <div id='date'>
              <label>End</label>
              <input
                id="date-input"
                type="datetime-local"
                value={this.state.eventEnd}
                onChange={this.update("eventEnd")}
              />
            </div>
          </div>
          <div id="selectors">
            <select onChange={this.handleEventType} defaultValue="default">
              <option
                className="eventType-selector"
                value="default"
                disabled={true}
              >
                Select an event type
              </option>
              <option className="eventType-selector" value="Online">
                Online
              </option>
              <option className="eventType-selector" value="In-Person">
                In-Person
              </option>
            </select>
            <select onChange={this.handleCategory} defaultValue="default">
              <option
                className="category-selector"
                value="default"
                disabled={true}
              >
                Select a category
              </option>
              <option className="category-selector" value="Sport">
                Sport
              </option>
              <option className="category-selector" value="Gaming">
                Gaming
              </option>
              <option className="category-selector" value="Board-Game">
                Board-Game
              </option>
            </select>
          </div>
            <input
              placeholder="Location"
              type="text"
              onChange={this.update("location")}
              value={this.state.location}
            />
            <input
              placeholder="Website"
              type="text"
              onChange={this.update("website")}
              value={this.state.website}
            />
            <input
              placeholder="Number of people you need"
              type="number"
              onChange={this.update("limit")}
              value={this.state.limit}
            />
          <button>Create Event</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EventForm)