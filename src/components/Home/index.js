// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClicked = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="main-bg-container">
        <div className="container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClicked} />
          ) : (
            <Login login={this.onClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
