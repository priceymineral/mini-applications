import React from 'react'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import Purchase from './Purchase.jsx'

class Home extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      page: 0,
      home: 0,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    }

  this.checkout = this.checkout.bind(this);
  }

  checkout () {
    console.log('clicked Checkout!', this.state.home);
    this.setState({home: this.state.home += 1});
  }

  render () {
      return !this.state.home ? (
      <div>
        <header className='header'><b>Proceed To Checkout</b></header>

        <br />
        <img src='https://images-na.ssl-images-amazon.com/images/I/61qcmGHd0nL._AC_SX522_.jpg' />
        <br />
        <br />


        <input type='submit' value='Checkout' onClick={this.checkout}/>
      </div>
      ) : (<Form1 state={this.state} />)
  }
}

export default Home