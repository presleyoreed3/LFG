import React from 'react'

class Count extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="counter">
	            <div id="limit">
	              <p>{this.props.event.limit - this.props.event.attendees.length}</p>
	              <h4>Spots:</h4>
	            </div>
	            <div id="goal">
	              <p>{this.props.event.limit}</p>
	              <h4>Goal:</h4>
	            </div>
	        </div>
		)
	}

}

export default Count