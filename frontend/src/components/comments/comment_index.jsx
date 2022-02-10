import React from "react";
import CommentIndexItem from "./comment_index_item";
import CommentForm from "./comment_form";
import './comment.scss';

class CommentIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchEventComments(this.props.eventId)
    this.props.fetchUsers()
  }

  // componentDidUpdate(prevProps){
  //   if (this.props.eventId !== prevProps.eventId) {
  //     this.componentDidMount()
  //   }
  // }

  commentEventCheck(){
    let commentEvents = []
    for (let i = 0; i < this.props.comments.length; i++){
      if (this.props.comments[i].eventId === this.props.eventId) {
        commentEvents.push(this.props.comments[i])
      }
    }
    return commentEvents
  }

  render(){
    let EventsComments;
    if (!this.props.comments) return null 
    if (!this.props.users) return null
    EventsComments = this.commentEventCheck()
    return (
      <div className="comment-index-container">
          <h2>{EventsComments.length} Comments</h2>
            <CommentForm eventId={this.props.eventId}  user={this.props.currentUser} createComment={this.props.createComment} />
          <div id="comments-holder">
          {EventsComments.map((comment) => {
              return <CommentIndexItem key={comment._id} index={comment._id} comment={comment} users={this.props.users} 
              currentUser={this.props.currentUser} openModal={this.props.openModal}/>
            })
          }
          </div>
      </div>
    )
  }

}

export default CommentIndex;