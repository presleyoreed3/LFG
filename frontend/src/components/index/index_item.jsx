import React from "react";
import './event_item.scss'

class IndexItem extends React.Component{

	render(){
		return(
			<div className="event-item">
				<div id='details'>
					<h3>{this.props.title}</h3>
					<p>Event Type: {this.props.eventType}</p>
					<p>Category: {this.props.category}</p>
				</div>
				<div id='limit'>
					<h4>Spots:</h4>
					<p>{this.props.limit}</p>
				</div>
			</div>
		)
	}

}

export default IndexItem;