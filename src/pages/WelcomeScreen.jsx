import { useNavigate } from 'react-router-dom'

function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="mobile-container">
      <div className="header">
        <div className="logo">
          <div className="logo-icon">❤️</div>
          EASYCARE
        </div>
      </div>
      
      <div className="welcome-container">
        <h1 className="welcome-title">
          Welcome to EasyCare. Book appointment with your doctor easily.
        </h1>
        
        <p className="welcome-subtitle">
          Fast, reliable and safe appointment at your fingertips.
        </p>

        <div className="heart-icon">
          <span>💓</span>
        </div>

        <button 
          className="btn btn-white"
          onClick={() => navigate('/booking')}
          style={{ marginTop: '40px' }}
        >
          Download NOW !
        </button>
      </div>
    </div>
  )
}

export default WelcomeScreen