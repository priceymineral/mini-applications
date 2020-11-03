import React from 'react'

class Form3 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      oneLove: false
    }
  }

  render () {
    return (
    <form onSubmit={this.renderHome}>
      <header className='header'>Credit Card Info</header>
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
      <button>Next</button>
    </form>
    )
  }
}


export default Form3