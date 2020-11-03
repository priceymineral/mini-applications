import React from 'react'
import Home from './Home.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import Purchase from './Purchase.jsx'

class Form1 extends React.Component {
  constructor (props) {
    super (props);
    this.state = props.state;


    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('this.props.state:', this.state);
  }

  changeState (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({home: this.state.home += 1})
  }

  render () {
    return this.state.home <2 ? (
      <form onSubmit={this.handleSubmit}>
        <header className='header'><b>Sign-in</b></header>
        <br />
        <div>
          <div>
            <input className='input' name='name' value={this.state.name} type='type' placeholder="What's your name?" onChange={this.changeState}/>
          </div>
          <div>
            <input className='input' name='email' value={this.state.email} type='type' placeholder="What's your email?" onChange={this.changeState}/>
          </div>
          <div>
            <input className='input' name='password' value={this.state.password} type='type' placeholder="Type your password" onChange={this.changeState}/>
          </div>
          <br />
          {/* <input type='submit' value='Next'/> */}
          <button>Next</button>
        </div>
      </form>
    ) : (<Form2  state={this.state} />);
  }
}

export default Form1