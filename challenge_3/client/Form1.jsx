import React from 'react'
import Form2 from './Form2.jsx'
import Home from './Home.jsx'

class Form1 extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeState (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({home: this.props.state.home += 1})
  }

  render () {
    return this.props.state.home <2 ? (
      <form onSubmit={this.handleSubmit}>
        <header className='header'><b>Sign-in</b></header>
        <br />
        <div  onChange={this.changeState}>
          <div>
            <input name='name' value={this.state.name} type='type' placeholder="What's your name?" />
          </div>
          <div>
            <input name='email' value={this.state.email} type='type' placeholder="What's your email?" />
          </div>
          <div>
            <input name='password' value={this.state.password} type='type' placeholder="Type your password" />
          </div>
          <br />
          {/* <input type='submit' value='Next'/> */}
          <button>Next</button>
        </div>
      </form>
    ) : (<Form2 state={this.props.state} />);
  }
}

export default Form1