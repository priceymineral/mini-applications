import React from 'react'
import Form3 from './Form3.jsx'

class Form2 extends React.Component {
  constructor (props) {
    super (props)
    this.renderForm3 = this.renderForm3.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeState (event) {}

  renderForm3 (event) {
    event.preventDefault();
    this.setState({home: this.props.state.home += 1})
  }

  render () {
    return this.props.state.home <3 ?  (
      <form onSubmit={this.renderForm3}>
        <header className='header'><b>Shipping Adrress</b></header>
        <br/>
        <div onChange={this.changeState}>
          <div>
            <input type='text' placeholder='Line 1' />
          </div>
          <div>
            <input type='text' placeholder='Line 2' />
          </div>
          <div>
            <input type='text' placeholder='City' />
          </div>
          <div>
            <input type='text' placeholder='State' />
          </div>
          <div>
            <input type='text' placeholder='Zip Code' />
          </div>
          <div>
            <input type='text' placeholder='Phone #' />
          </div>
          <br />
          <button>Next</button>
        </div>
      </form>
    ) : (<Form3 state={this.props.state} />)
  }
}


export default Form2