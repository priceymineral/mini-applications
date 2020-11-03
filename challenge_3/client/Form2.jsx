import React from 'react'
import Home from './Home.jsx'
import Form1 from './Form1.jsx'
import Form3 from './Form3.jsx'
import Purchase from './Purchase.jsx'




class Form2 extends React.Component {
  constructor (props) {
    super (props);
    this.state = props.state;

    this.renderForm3 = this.renderForm3.bind(this);
    this.changeState = this.changeState.bind(this);
    console.log('this.props.state:', this.state);
  }

  changeState (event) {
    this.setState({[event.target.name]: event.target.value});
  }

  renderForm3 (event) {
    event.preventDefault();
    this.setState({home: this.state.home += 1});
  }

  render () {
    return this.state.home <3 ?  (
      <form onSubmit={this.renderForm3}>
        <header className='header'><b>Shipping Adrress</b></header>
        <br/>
        <div>
          <div>
            <input className='input' name='line1' value={this.state.line1} type='text' placeholder='Line 1' onChange={this.changeState} />
          </div>
          <div>
            <input className='input' name='line2' value={this.state.line2} type='text' placeholder='Line 2' onChange={this.changeState} />
          </div>
          <div>
            <input className='input' name='city' value={this.state.city} type='text' placeholder='City' onChange={this.changeState} />
          </div>
          <div>
            <input className='input' name='state' value={this.state.state} type='text' placeholder='State' onChange={this.changeState} />
          </div>
          <div>
            <input className='input' name='zipcode' value={this.state.zipcode} type='text' placeholder='Zip Code' onChange={this.changeState} />
          </div>
          <div>
            <input className='input' name='phone' value={this.state.phone} type='text' placeholder='Phone #' onChange={this.changeState} />
          </div>
          <br />
          <button>Next</button>
        </div>
      </form>
    ) : (<Form3 state={this.state} />)
  }
}


export default Form2