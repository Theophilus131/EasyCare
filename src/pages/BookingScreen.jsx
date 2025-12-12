import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BookingScreen() {
  const [patientName, setPatientName] = useState('')
  const [condition, setCondition] = useState('')
  const [availability, setAvailability] = useState('')
  const navigate = useNavigate()

  const handleBooking = (e) => {
    e.preventDefault()
    if (patientName && condition && availability) {
      navigate('/dashboard')
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
      
      <div className="booking-form" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #f8bbd9 100%)', minHeight: '100vh', paddingTop: '60px' }}>
        <form onSubmit={handleBooking}>
          <input
            type="text"
            className="booking-input"
            placeholder="Patient's name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
          
          <input
            type="text"
            className="booking-input"
            placeholder="Patient's condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          />
          
          <input
            type="text"
            className="booking-input"
            placeholder="Time of availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />

          <div className="heart-icon" style={{ margin: '40px auto' }}>
            <span>💓</span>
          </div>

          <button type="submit" className="btn btn-blue" style={{ marginTop: '40px' }}>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingScreen