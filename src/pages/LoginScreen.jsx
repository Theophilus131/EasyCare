import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginScreen({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple validation
    if (email && password) {
      setUser({ email })
      navigate('/welcome')
    }
  }

  return (
    <div className="mobile-container">
      <div className="header">
        <div className="logo">
          <div className="logo-icon">❤️</div>
          EASYCARE
        </div>
      </div>
      
      <form className="form-container" onSubmit={handleLogin}>
        <div className="form-group">
          <label className="form-label">EMAIL</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ background: '#fff3cd' }}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">PASSWORD</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ background: '#f8d7da' }}
            required
          />
        </div>

        <div className="heart-icon" style={{ width: '100px', height: '100px', margin: '30px auto' }}>
          <span style={{ fontSize: '40px' }}>💓</span>
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>

        <a href="#" className="link-text">
          Don't have an account? Sign up
        </a>
      </form>
    </div>
  )
}

export default LoginScreen