import React from "react";
import './comment.scss';


class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ownerId: '',
      eventId: '',
      text: '',
      errors: {}
    }

    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  componentDidMount(){
    if (!this.props.user) return null;
    this.setState({ownerId: this.props.user.id, 
                  eventId: this.props.eventId,
                  errors: {}
                  })
  }

  componentDidUpdate(prevProps){
    if (this.props.eventId !== prevProps.eventId){
      this.componentDidMount()
    }
  }


  handleErrors(e){
    if (e.currentTarget.value.length > 0) {
      this.setState({errors: {}})
    }
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li id="comment-errors" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  handleCancel(e){
    e.preventDefault();
    this.setState({text: ''})
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(comment)
      .then((res) => {
        if (res.errors) {
          this.setState({errors: res.errors})
        } else {
          this.setState({ text: '', errors: {}})
        }
      })
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    let status = (!this.props.user) ? true : false;
    let initial = (this.props.user) ? this.props.user.username : ''
    return(
      <div id="comment-form-real">
        <div id="comment-form-container">
          <h2 className="comment-form-username"><p>{initial}</p></h2>
          <form onSubmit={this.handleSubmit} className="comment-form">
            <textarea onKeyUp={this.handleErrors} className="comment-form-textarea" placeholder='Add a public comment...' value={this.state.text} onChange={this.update('text')}/>
            <div className="comment-form-buttons">
              <button className='comment-form-input' type='submit' placeholder="Comment" disabled={status}>Submit</button>
              <button className='comment-form-button' onClick={this.handleCancel} disabled={status}>Clear</button> 
            </div>
          </form>
          {this.renderErrors()}
        </div>
      </div>
    )
  }
}

export default CommentForm;