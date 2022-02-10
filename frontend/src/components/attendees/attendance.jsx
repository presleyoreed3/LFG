import React from "react";
import './attendance.scss'
import {withRouter} from 'react-router-dom'

class AttendanceIndexItem extends React.Component{

	render(){
		return(
			<div className="attendee-item" >
				<div id='user-details'>
					<p>{this.props.user.username}</p>
					<img className="attendee-logo" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg-logo-green.png"/>
				</div>
			</div>
		)
	}

}

export default withRouter(AttendanceIndexItem);