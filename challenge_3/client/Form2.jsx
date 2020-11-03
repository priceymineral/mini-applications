import React from 'react'

class Form2 extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      oneLove: false
    }
  }

  render () {
    return (

    <form onSubmit={this.renderForm3}>
      <header className='header'>Shipping Adrress</header>
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
        <button>Next</button>
      </div>
    </form>
    )
  }
}

export default Form2