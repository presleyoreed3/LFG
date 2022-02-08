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
    this.handleCategory = this.handleCategory.bind(this);
    this.handleEventType = this.handleEventType.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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

  handleCategory(e) {
    let selected = Array.from(document.getElementsByClassName('category-selector'))
    console.log("CATEGORY", selected)
    selected.forEach((input) => {
      if (input.selected) this.setState({category: e.currentTarget.value})
    })
    console.log("state", this.state)
  }

  handleEventType(e) {
    let selected = Array.from(document.getElementsByClassName('eventType-selector'))
    console.log(selected)
    selected.forEach((input) => {
      if (input.selected) this.setState({eventType: e.currentTarget.value})
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Create an Event</h2>
        <div onClick={this.props.closeModal}>CKLOSE MOKDAL</div>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" onChange={this.update('title')} value={this.state.title}/>
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
            <select onChange={this.handleEventType} defaultValue="default">
              <option className="eventType-selector" value="default" disabled={true}>Select an event type</option>
              <option className="eventType-selector" value="Online">Online</option>
              <option className="eventType-selector" value="In-Person">In-Person</option>
            </select>
          </label>
          <label>Category
            <select onChange={this.handleCategory} defaultValue="default">
              <option className="category-selector" value="default" disabled={true}>Select a category</option>
              <option className="category-selector" value="Sport">Sport</option>
              <option className="category-selector" value="Gaming">Gaming</option>
              <option className="category-selector" value="Board-Game">Board-Game</option>
            </select>
          </label>
          <label>Location
            <input type="text" onChange={this.update('location')} value={this.state.location}/>
          </label>
          <label>Website
            <input type="text" onChange={this.update('website')} value={this.state.website}/>
          </label>
          <label>Limit
            <input type="number" onChange={this.update('limit')} value={this.state.limit}/>
          </label>
          <button>Create Event</button>
        </form>
      </div>
    )
  }
}

export default EventForm