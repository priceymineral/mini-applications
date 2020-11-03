import React from 'react'
import Form1 from './Form1.jsx'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      oneLove: false
    }
    this.checkout = this.checkout.bind(this);
  }

  checkout () {
    console.log('clicked Checkout!');
    this.setState({oneLove: !this.state.oneLove});
  }

  // renderForm1 () {
  //   event.preventDefault();
  //   this.setState(on)
  // }

  render () {
    return this.state.oneLove ? (<Form1 />) : (<div><header className='header'>Proceed To Checkout</header><button className='checkout-button' onClick={this.checkout}>Checkout</button></div>)
  }
}

export default Home

// <form onSubmit={this.renderForm1}>
// <button className='checkout-button' onClick={this.checkout}>Checkout</button>
// </form>