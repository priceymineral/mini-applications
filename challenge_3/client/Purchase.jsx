import React from 'react'
import Home from './Home.jsx'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'


class Purchase extends React.Component {
  constructor (props) {
    super (props)
    this.state = props.state

    this.submitPurchase = this.submitPurchase.bind(this);
  }

  submitPurchase (event) {
    event.preventDefault();
    this.setState({home: this.state.home += 1})
  }

  render () {
    // render all the data input in Forms 1-3
    return this.state.home <5 ? (
    <div>
      <header className='header'>
      <b>Complete Purchase</b>
      </header>

      <br />
      <h1>Veify your information</h1>

      <br />
      <div>
        <div>
          {this.state.name}
        </div>
        <div>
          {this.state.email}
        </div>

        <br />
        <div>
          {`${this.state.line1},
          ${this.state.line2},
          ${this.state.city} ${this.state.state}, ${this.state.zipcode}`}
        </div>
        <div>
          {this.state.phone}
        </div>

        <br />
        <div>
          {this.state.cardNumber}
        </div>
        <div>
          {this.state.expiry}
        </div>
        <div>
          {this.state.cvv}
        </div>
        <div>
          {this.state.billingZip}
        </div>
      </div>

      <br />
      <input type='submit' value='Purchase' onClick={this.submitPurchase} />
    </div>
    ) : (<Home />)
  }
}

export default Purchase