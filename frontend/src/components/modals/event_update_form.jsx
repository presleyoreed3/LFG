import React from 'react';

class EventUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleEventType = this.handleEventType.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents()
      .then((events) => this.findEvent(this.props.events))
    // this.findEvent(this.props.events)
    // this.setState({_id: this.props.eventId})
  }

  findEvent(events) {

    events.forEach((event, i) => {

      if (event._id === this.props.eventId) {
        let newState = Object.assign({}, event, {index: i})
        this.setState(newState)
      }
    })
  }  

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateEvent(this.state);
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
    if(this.props.events.length === 0) return null;

    const eventType = this.state.eventType;
    const category = this.state.category;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='event-form'>
          <div id="modal-top">
            <h2>Update your LFG</h2>
            <div onClick={this.props.closeModal} class="close">&times;</div>
          </div>
            <input type="text" onChange={this.update('title')} value={this.state.title}/>
            <textarea placeholder="Description of your event" value={this.state.description} onChange={this.update('description')} >{this.state.description}</textarea>
            <div id="date-selectors">
              <div id="date">
                <label>Start</label>
                <input id="date-input" type="datetime-local" value={this.state.eventStart} onChange={this.update('eventStart')}/>
              </div>
              <div id="date">
                <label>End</label>
                <input id="date-input" type="datetime-local" value={this.state.eventEnd} onChange={this.update('eventEnd')}/>
              </div>
            </div>
            <div id="selectors">
              <select onChange={this.handleEventType} defaultValue="default">
                <option className="eventType-selector" value="default" disabled={true}>Select an event type</option>
                <option selected={eventType === "Online" ? true : false} className="eventType-selector" value="Online">Online</option>
                <option selected={eventType === "In-Person" ? true : false} className="eventType-selector" value="In-Person">In-Person</option>
              </select>
              <select onChange={this.handleCategory} defaultValue="default">
                <option className="category-selector" value="default" disabled={true}>Select a category</option>
                <option selected={category === "Sport" ? true : false} className="category-selector" value="Sport">Sport</option>
                <option selected={category === "Gaming" ? true : false} className="category-selector" value="Gaming">Gaming</option>
                <option selected={category === "Board-Game" ? true : false} className="category-selector" value="Board-Game">Board-Game</option>
              </select>
            </div>
            <input type="text" onChange={this.update('location')} value={this.state.location}/>
            <input placeholder="Website" type="text" onChange={this.update('website')} value={this.state.website}/>
            <input type="number" onChange={this.update('limit')} value={this.state.limit}/>
          <button>Update Event</button>
        </form>
      </div>
    )
  }
}

export default EventUpdateForm