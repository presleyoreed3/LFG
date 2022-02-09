import React from "react";
import './comment.scss';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }

    this.editComment = this.editComment.bind(this)
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
    if (this.state.edit) {
      this.setActive()
    }
  }

  setActive(e){
    e.preventDefault();
    e.stopPropagation();
    let dropdown = document.querySelector('.comment-dropdown-content')
    console.log(dropdown)
    dropdown.classList.toggle('active')
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
            <div className="comment-index-dropdown" onClick={this.setActive}>
                <p className="comment-index-option" >{commentOptions}</p>
                <div className="comment-dropdown-content"> 
                  <p className="comment-dropdown-options" >Edit</p>
                  <p className="comment-dropdown-options" >Delete</p>
                </div>
            </div>
        </div>
          
        <p className="comment-index-item-text">{this.props.comment.text}</p>
        
      </div>
    )
  }
}

export default CommentIndexItem;