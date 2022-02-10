import React from "react";
import './attendance.scss'
import {withRouter} from 'react-router-dom'

// we have access to user in question, THE CURRENT USER

class AttendanceIndexItem extends React.Component{

 	constructor(props) {
		 super(props);
		 this.followToggle = this.followToggle.bind(this);
		 this.checkFollow = this.checkFollow.bind(this);
	}

	checkFollow() {
		let status = false;
		this.props.currentUser.friends.forEach(friend => {
			if(friend._id === this.props.user._id) {
				status = true;
			}
		})
		return status;
	}

	findUser(userId) {
    return this.props.users.filter(user => user._id === userId)[0]
  }


	followToggle(e) {
		e.preventDefault();
		let current = this.findUser(this.props.currentUser.id)

		if(this.checkFollow()) {
			// let newFriends = this.props.currentUser.friends.filter(friend => friend._id !== this.props.user._id)
			let newFriends = current.friends.filter(friend => friend._id !== this.props.user._id);
			current.friends = newFriends;
		} else {
			current.friends.push(this.props.user);
		}
		debugger
		this.props.updateUser(current);
	}

	render(){

		// if(!this.props.currentUser) return;
		let icon;

		if(Object.keys(this.props.currentUser).length === 0) {
			icon = "";
		} else {
			if(this.props.user._id === this.props.currentUser.id) {
				icon = <i  onClick={this.followToggle} className="fa-solid fa-jedi"></i>
			} else if(this.checkFollow()){
				icon = <img  onClick={this.followToggle} className="attendee-logo" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg-logo-green.png"/>
			} else {
				// icon = <i  onClick={this.followToggle} className="fa-solid fa-heart"></i>
				icon = <img  onClick={this.followToggle} className="attendee-logo" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons2/logo-filled.png"/>

			}
		}
		return(
			<div className="attendee-item" >
				<div id='user-details'>
					<p>{this.props.user.username}</p>
					{icon}
				</div>
			</div>
		)
	}

}

export default withRouter(AttendanceIndexItem);