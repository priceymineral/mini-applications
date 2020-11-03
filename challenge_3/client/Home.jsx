import React from 'react'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'

class Home extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      home: 0,
    }

  this.checkout = this.checkout.bind(this);
}


  checkout () {
    console.log('clicked Checkout!', this.state.home);
    this.setState({home: this.state.home +=1});
  }

  render () {
      return !this.state.home ? (
      <div>
        <header className='header'><b>Proceed To Checkout</b></header>
        <br />
        <input type='submit' value='Checkout' onClick={this.checkout}/>
      </div>
      ) : (<Form1 state={this.state} />)
  }
}

export default Home