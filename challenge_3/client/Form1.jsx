import React from 'react'
import Form2 from './Form2.jsx'

class Form1 extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      oneLove: false
    }
    this.changeState = this.changeState.bind(this);
    this.renderForm2 = this.renderForm2.bind(this);
  }

  changeState () {
    console.log(this.state.oneLove);
    this.setState({oneLove: !this.state.oneLove})
  }

  renderForm2 () {
    // console.log(this.state.oneLove);
    return <Form2 />;
  }

  render () {
    return (
      <form onSubmit={this.renderForm2}>
        <header className='header'>Sign-in</header>
        <div onChange={this.changeState}>
          <input type='type' placeholder="What's your name?" />
        </div>
        <div>
          <input type='type' placeholder="What's your email?" />
        </div>
        <div>
          <input type='type' placeholder="Type your password" />
        </div>
        <button>Next</button>
      </form>
    )
  }
}

export default Form1