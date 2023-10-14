// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" onClick={logout} className="main-logout-button">
      Logout
    </button>
  )
}

export default Logout
