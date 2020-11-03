import React from 'react'
import Form3 from './Form3.jsx'
import Home from './Home.jsx'
import clientInfo from './clientInfo.js'
class Purchase extends React.Component {
  constructor (props) {
    super (props)
    this.submitPurchase = this.submitPurchase.bind(this);
  }

  submitPurchase (event) {
    event.preventDefault();
    this.setState({home: this.props.state.home += 1})
  }

  render () {
    // render all the data input in Forms 1-3
    return this.props.state.home <5 ? (
    <div>
      <header className='header'>
      <b>Complete Purchase</b>
      </header>
      <br />
      <clientInfo />
      <br />
      <input type='submit' value='Purchase' onClick={this.submitPurchase} />
    </div>
    ) : (<Home state={this.state} />)
  }
}

export default Purchase