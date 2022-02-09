import React from "react";
import './comment/scss';


class CommentEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = Object.assign({errors: []} , this.props.comment)
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e){
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.updateComment(comment)
    // testEdit is to close the form
    // .then(() => this.props.testEdit())
      // .fail(() => this.setState({ errors: this.props.errors }));
      return null
  }

  handleErrors(e){
    if (e.currentTarget.value.length > 0) {
      this.setState({errors: []})
    }
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    // no current user
    if (!this.props.currentUser) return null;
    return (
      <div  id="edit-comment-container">
        <form onSubmit={this.handleSubmit} className="edit-comment">
          <textarea onKeyUp={this.handleErrors} className="edit-comment-textarea" value={this.state.text} onChange={this.update('text')}/>
            <div className="edit-comment-buttons">
              <button className='edit-comment-button'>Cancel</button>
              <input className='edit-comment-input'type='submit' placeholder="Comment"/>
            </div>
        </form>
      </div>
    )
  }

}

export default CommentEdit;