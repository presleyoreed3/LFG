import React from "react";
import './event_item.scss'
import {withRouter} from 'react-router-dom'

class IndexItem extends React.Component{

	render(){
		return(
			<div className="event-item" onClick={()=> this.props.history.push(`/events/${this.props.event._id}`)}>
				<div id='event-details'>
					<h3>{this.props.event.title}</h3>
					<p>Event Type: {this.props.event.eventType}</p>
					<p>Category: {this.props.event.category}</p>
				</div>
				<div id='limit'>
					<h4>Spots:</h4>
					<p>{this.props.event.limit - this.props.event.attendees.length}</p>
				</div>
			</div>
		)
	}

}

export default withRouter(IndexItem);