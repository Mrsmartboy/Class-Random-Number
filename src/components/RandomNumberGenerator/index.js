import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => {
    const randomValue = Math.floor(Math.random() * 100)
    this.setState({number: randomValue})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
