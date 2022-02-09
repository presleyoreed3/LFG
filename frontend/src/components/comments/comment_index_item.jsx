import React from "react";
import './comment.scss';
import CommentEditContainer from './comment_edit_container';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }

    this.editComment = this.editComment.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  commentUserCheck(){
    for (let i = 0; i < this.props.users.length; i++){
      if (this.props.users[i]._id === this.props.comment.ownerId) {
        return this.props.users[i]
      }
    }
  }

  editComment(){
    (this.state.edit) ? this.setState({edit: false}) : this.setState({edit: true})
    // if (this.state.edit) {
    //   this.setActive()
    // }
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
        {this.state.edit ? <CommentEditContainer eventId={this.props.comment.eventId} comment={this.props.comment} currentUser={this.props.currentUser} editComment={this.editComment}/>  : <p className="comment-index-item-text">{this.props.comment.text}</p>}        
      </div>
    )
  }
}

export default CommentIndexItem;