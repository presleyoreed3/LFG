import React from "react";

export default class CommentDelete extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.deleteComment(this.props.commentId).then(
      this.props.closeModal()
    )
  }

  render(){
    return (
      <div id='delete-modal'>
        <h1 className="delete-modal-header">Delete comment</h1>
        <p className="delete-modal-text">Delete your comment permanently?</p>
        <div id='delete-modal-button-container'>
          <button className="delete-button-cancel" onClick={() => this.props.closeModal()}>CANCEL</button>
          <button className="delete-button-confirm" onClick={this.handleClick}>DELETE</button>
        </div>

      </div>
    )
  }
}