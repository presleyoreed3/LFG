import React from "react";
import './comment.scss';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  commentUserCheck(){
    for (let i = 0; i < this.props.users.length; i++){
      if (this.props.users[i]._id === this.props.comment.ownerId) {
        return this.props.users[i]
      }
    }
  }

  render(){
    if (this.props.users.length === 0) return null
    let user;
    user = this.commentUserCheck();
    return(
      <div className="comment-index-item-container">
        <h2 className="comment-index-item-username">{user.username}</h2>
        <p className="comment-index-item-text">{this.props.comment.text}</p>
      </div>
    )
  }
}

export default CommentIndexItem;