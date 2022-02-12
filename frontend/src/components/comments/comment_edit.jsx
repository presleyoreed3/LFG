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
    this.renderErrors = this.renderErrors.bind(this);
  }


  componentDidMount(){
    this.props.fetchEventComments(this.props.eventId)
  }

  handleSubmit(e){
    e.preventDefault();
    this.findIndex(this.props.comment)
  }

  // handleErrors(e){
  //   if (e.currentTarget.value.length > 0) {
  //     this.setState({errors: {}})
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ errors: nextProps.errors });
  // }

  handleCancel(e){
    e.preventDefault();
    this.props.editComment()
    this.setState({errors: {}});
  }

  renderErrors() {
    // console.log(this.props.errors, "STATE ERRORS")
    // debugger
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  findIndex(comment){
    let commentIndex = this.props.comments.indexOf(comment);
    let newState = Object.assign({}, this.state, {index: commentIndex})
    this.setState(newState,() => this.props.updateComment(this.state)
      .then((res)=> {
        if (res.errors) {
          this.setState({errors: res.errors})
        } else {
          this.setState({ text: '', errors: {}})
          if(Object.keys(this.props.errors).length === 0) {
            this.props.editComment();
          }
        }
      }));
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
            {this.renderErrors()}
        </form>

      </div>
    )
  }

}

export default CommentEdit;