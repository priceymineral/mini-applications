import React from 'react'
import Purchase from './Purchase.jsx'

class Form3 extends React.Component {
  constructor (props) {
    super (props);
    this.handleChange = this.handleChange.bind(this);
    this.renderPurchasePage = this.renderPurchasePage.bind(this);
  }

  handleChange (event) {}

  renderPurchasePage (event) {
    event.preventDefault();
    this.setState({home: this.props.state.home += 1})
  }
  render () {
    return this.props.state.home <4 ? (
    <form onSubmit={this.renderPurchasePage}>
      <div onChange={this.handleChange}>
        <header className='header'><b>Credit Card Info</b></header>
        <br/>
        <div>
          <input type='text' placeholder='Card #'></input>
        </div>
        <div>
          <input type='text' placeholder='Expiry'></input>
        </div>
        <div>
          <input type='text' placeholder='CVV'></input>
        </div>
        <div>
          <input type='text' placeholder='Billing Zip Code'></input>
        </div>
        <br />
        <button>Next</button>
      </div>
    </form>
    ) : (<Purchase state={this.state}/>)
  }
}

export default Form3