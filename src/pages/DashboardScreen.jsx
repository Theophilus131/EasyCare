import { useNavigate } from 'react-router-dom'

function DashboardScreen() {
  const navigate = useNavigate()

  const doctors = [
    { name: 'Dr. Babarinde', specialty: 'Dermatologist', avatar: '👨‍⚕️' },
    { name: 'Dr. Iyinode', specialty: 'Dentist', avatar: '👩‍⚕️' }
  ]

  return (
    <div className="mobile-container">
      <div className="dashboard">
        {/* Calendar Widget */}
        <div className="calendar-widget">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', fontSize: '12px' }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
              <div key={day} style={{ padding: '5px', fontWeight: 'bold' }}>{day}</div>
            ))}
            {Array.from({length: 35}, (_, i) => (
              <div key={i} style={{ padding: '5px', textAlign: 'center' }}>
                {i > 6 && i < 32 ? i - 6 : ''}
              </div>
            ))}
          </div>
        </div>

        {/* Doctors List */}
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              {doctor.avatar}
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
          </div>
        ))}

        {/* Upcoming Appointment */}
        <div className="appointment-card">
          <h3>Upcoming Appointment</h3>
          <h4>Dr. Iyinode Deborah</h4>
          <p>Dentist</p>
          <p>Tomorrow at 10:00AM</p>
        </div>

        {/* Quick Book Button */}
        <button 
          className="btn btn-blue"
          onClick={() => navigate('/booking')}
          style={{ marginTop: '20px' }}
        >
          Quick Book Appointment
        </button>

        {/* Bottom Navigation */}
        <div style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '375px', background: 'white', padding: '10px', borderTop: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button style={{ background: 'none', border: 'none', fontSize: '24px' }}>🏠</button>
            <button 
              style={{ background: 'none', border: 'none', fontSize: '24px' }}
              onClick={() => navigate('/profile')}
            >
              👤
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen