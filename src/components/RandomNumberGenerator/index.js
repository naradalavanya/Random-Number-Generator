// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: number})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="random-number-generator">
        <div className="content-container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-btn"
            onClick={this.generateRandomNumber}
            type="button"
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
