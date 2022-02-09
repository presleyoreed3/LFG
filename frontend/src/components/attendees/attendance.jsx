import React from "react";
import './attendance.scss'
import {withRouter} from 'react-router-dom'

class AttendanceIndexItem extends React.Component{

	render(){
		return(
			<div className="attendee-item" >
				<div id='user-details'>
					<p>{this.props.user.username}</p>
				</div>
			</div>
		)
	}

}

export default withRouter(AttendanceIndexItem);