import React from "react";
import './comment.scss';
import CommentEditContainer from './comment_edit_container';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)

    // this.editComment = this.editComment.bind(this);
    this.setActive = this.setActive.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  commentUserCheck(){
    for (let i = 0; i < this.props.users.length; i++){
      if (this.props.users[i]._id === this.props.comment.ownerId) {
        return this.props.users[i]
      }
    }
  }

  editComment(){
    let comment = document.querySelectorAll(`.comment-index-item-text`);
    comment.forEach((option) => {
      if (option.classList.contains(this.props.index)) {
        option.classList.toggle("hide");
      }
    });

    
    let editComment = document.querySelectorAll(`.comment-edit-hide`);
    editComment.forEach((option) => {
      if (option.classList.contains(this.props.index)) {
        option.classList.toggle("active-flex");
      }
    });
  }

  setActive(){
    let dropdown = document.querySelectorAll(`.comment-dropdown-content`);
    dropdown.forEach((option) => {
      if (option.classList.contains(this.props.index)) {
        option.classList.toggle('active')
      }
    })
  }

  render(){
    if (this.props.users.length === 0) return null
    let commentOptions;
    if (this.props.currentUser) {
      commentOptions = (this.props.currentUser.id === this.props.comment.ownerId) ? 'edit' : ''
    } else {
      commentOptions = ''
    }
{/* <i className="fas fa-ellipsis-v"></i> */}

    let user;
    user = this.commentUserCheck();
    return(
      <div className="comment-index-item-container">
        <div className="comment-index-username-dropdown">
            <h2 className="comment-index-item-username">{user.username}</h2>
            <div className="comment-index-dropdown" >
                <p className="comment-index-option" onClick={this.setActive}>{commentOptions}</p>
                <div className={`comment-dropdown-content ${this.props.index}`}> 
                  <p className="comment-dropdown-options" onClick={this.editComment}>Edit</p>
                  <p className="comment-dropdown-options" onClick={() => this.props.openModal('deleteComment', this.props.comment._id)}>Delete</p>
                </div>
            </div>
        </div>
        <p className="comment-datetime">Timestamp Here</p>
        <p className={`comment-index-item-text ${this.props.index}`}>{this.props.comment.text}</p>
        <CommentEditContainer index={this.props.index} eventId={this.props.comment.eventId} comment={this.props.comment} currentUser={this.props.currentUser} editComment={this.editComment}/>
      </div>
    )
  }
}

export default CommentIndexItem;