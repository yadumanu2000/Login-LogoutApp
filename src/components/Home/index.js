import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  handleLogin = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const {isLoggedIn} = this.state
    const message = isLoggedIn ? 'Welcome User' : 'Please Login'
    const buttonLabel = isLoggedIn ? 'Logout' : 'Login'

    return (
      <div className="home-container">
        <h1 className="message">{message}</h1>
        <button
          type="button"
          onClick={isLoggedIn ? this.handleLogout : this.handleLogin}
        >
          {buttonLabel}
        </button>
      </div>
    )
  }
}

export default Home
