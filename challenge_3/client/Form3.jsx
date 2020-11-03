import React from 'react'
import Home from './Home.jsx'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Purchase from './Purchase.jsx'

class Form3 extends React.Component {
  constructor (props) {
    super (props);
    this.state = props.state

    this.handleChange = this.handleChange.bind(this);
    this.renderPurchasePage = this.renderPurchasePage.bind(this);
    console.log('this.props.state:', this.state);
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  renderPurchasePage (event) {
    event.preventDefault();
    this.setState({home: this.state.home += 1})
  }

  render () {
    return this.state.home <4 ? (
    <form onSubmit={this.renderPurchasePage}>
      <div>
        <header className='header'><b>Credit Card Info</b></header>
        <br/>
        <div>
          <input className='input' name='cardNumber' value={this.state.cardNumber} type='text' placeholder='Card #' onChange={this.handleChange} />
        </div>
        <div>
          <input className='input' name='expiry' value={this.state.expiry} type='text' placeholder='Expiry' onChange={this.handleChange}/>
        </div>
        <div>
          <input className='input' name='cvv' value={this.state.cvv} type='text' placeholder='CVV' onChange={this.handleChange}/>
        </div>
        <div>
          <input className='input' name='billingZip' value={this.state.billingZip} type='text' placeholder='Billing Zip Code' onChange={this.handleChange}/>
        </div>
        <br />
        <button>Next</button>
      </div>
    </form>
    ) : (<Purchase state={this.state} />)
  }
}

export default Form3