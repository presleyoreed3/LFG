import React from "react";
import './comment.scss';


class CommentEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = Object.assign({errors: []} , this.props.comment)
    // this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.findIndex = this.findIndex.bind(this);
  }


  componentDidMount(){
    this.props.fetchEventComments(this.props.eventId)
  }

//   componentWillUnmount() {
//     // fix Warning: Can't perform a React state update on an unmounted component
//     this.setState = (state,callback)=>{
//         return;
//     };
// }

  handleSubmit(e){
    e.preventDefault();
    // const comment = Object.assign({}, this.state);
    this.findIndex(this.props.comment)
    // this.props.updateComment(this.state)
    // testEdit is to close the form
    // .then(() => this.props.editComment())
      // .fail(() => this.setState({ errors: this.props.errors }));
      return null
  }

  // handleErrors(e){
  //   if (e.currentTarget.value.length > 0) {
  //     this.setState({errors: []})
  //   }
  // }

  handleCancel(e){
    //reset body to empty
    e.preventDefault();
    this.props.editComment();
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  findIndex(comment){
    let commentIndex = this.props.comments.indexOf(comment);
    let newState = Object.assign({}, this.state, {index: commentIndex})
    this.setState(newState,() => this.props.updateComment(this.state).then(() => this.props.editComment()));
  }

  render(){
    // no current user
    if (!this.props.currentUser) return null;
    return (
      <div className={`comment-edit-hide ${this.props.index}`} id="edit-comment-container">
        <form onSubmit={this.handleSubmit} className="edit-comment">
          <textarea onKeyUp={this.handleErrors} className="edit-comment-textarea" value={this.state.text} onChange={this.update('text')}/>
            <div className="edit-comment-buttons">
              <input className='edit-comment-input'type='submit'/>
              <button className='edit-comment-button' onClick={this.handleCancel}>Cancel</button>
            </div>
        </form>
      </div>
    )
  }

}

export default CommentEdit;