import { useNavigate } from 'react-router-dom'

function ProfileScreen() {
  const navigate = useNavigate()

  const menuItems = [
    { title: 'Personal Info', icon: '👤' },
    { title: 'Notifications', icon: '🔔' },
    { title: 'Payment Methods', icon: '💳' }
  ]

  return (
    <div className="mobile-container">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
            👨‍⚕️
          </div>
          <h2>Dr. Babarinde</h2>
          <p style={{ color: '#666' }}>Dermatologist</p>
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <span style={{ color: '#ccc' }}>›</span>
          </div>
        ))}

        {/* Logout Button */}
        <button 
          className="btn btn-blue"
          onClick={() => navigate('/')}
          style={{ marginTop: '40px' }}
        >
          Logout
        </button>

        {/* Bottom Navigation */}
        <div style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '375px', background: 'white', padding: '10px', borderTop: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button 
              style={{ background: 'none', border: 'none', fontSize: '24px' }}
              onClick={() => navigate('/dashboard')}
            >
              🏠
            </button>
            <button style={{ background: 'none', border: 'none', fontSize: '24px', color: '#2196f3' }}>👤</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen