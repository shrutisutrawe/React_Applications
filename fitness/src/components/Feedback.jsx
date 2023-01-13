import React, { Component } from 'react';
import '../css/feedbackStyle.css';
class Feedback extends Component {
  state = {
    Name: '',
    showName: false,
    Comments: '',
    showComments:false,
    error:''
  }

  displayNameHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ Name: updatedName });
  }

  displayCommentsHandler = (e) => {
    let updatedComments = e.target.value;
    this.setState({ Comments: updatedComments });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.state.Name;
    let comments = this.state.Comments;
    if(name === '' && comments === ''){
        this.setState({error:'All fields are required'});
        return;
    }else if (name === ''){
        this.setState({error:'Please enter your name'});
        return;
    }else if (comments === ''){
        this.setState({error:'Please write to us!'});
        return;
    }
    this.setState({
      showName: true,
      showComments: true,
      error:''
    });
    
  }

  render() {
      let error;
      if(this.state.error){
          error = <div className = "form-error">{this.state.error}</div>
      }
    return (
        <><div className='wrapper'>
        <h2>Feedback</h2>
        <div className='main'>
          <div className='form-container'>
            <form autoComplete="off" className='form-group'
              onSubmit={this.handleSubmit}>
              {error}
              <label>Name<mark>*</mark></label>
              <input type="text" className='form-control' required
                onChange={this.displayNameHandler} value={this.state.Name}></input>
              <br></br>
              <label for="comments">Message for us<mark>*</mark></label>
              <br></br>
              <textarea className='form-comment' required
                onChange={this.displayCommentsHandler} value={this.state.Comments}></textarea>
              <br></br>
              <button type="submit" onClick={this.handleSubmit} className='form-btn'>Submit</button>

            </form>
          </div>

          <div className='view-container'>
            {!this.state.showName && <p>No feedback from you yet!</p>}
            {this.state.showName && <h3>{this.state.Name}</h3>}
            {this.state.showComments && <p>{this.state.Comments}</p>}
          </div>
        </div>
        <div className='feedback-footer'>
              <p><small>&copy; 2021 Pexels GmbH</small></p>
          </div>
      </div>
      </> 

    );
  }
}
export default Feedback;