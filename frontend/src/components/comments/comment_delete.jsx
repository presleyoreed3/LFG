import React from "react";
import './comment_delete_modal.scss';

export default class CommentDelete extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    debugger
    this.props.deleteComment(this.props.commentId).then(
      this.props.closeModal()
    )
  }

  render(){
    return (
      <div id='delete-modal'>
        <p className="delete-modal-text">Are you sure you want to delete this comment?</p>
          <button id="delete-button-confirm" onClick={this.handleClick}>DELETE</button>
          <button id="delete-button-cancel" onClick={() => this.props.closeModal()}>CANCEL</button>
      </div>
    )
  }
}