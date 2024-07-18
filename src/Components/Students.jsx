import { useState } from 'react';
import './CSS/Students.css';
import SUZA from '../Components/Assets/SUZA.jpg';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    if (!registrationNumber || !password) {
      setError('All fields are required');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    fetch('http://localhost:5003/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ registrationNumber, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.student) {
          navigate('/attend');
        } else {
          setError('Invalid credentials');
        }
      })
      .catch(error => {
        setError('An error occurred during login');
      });
  };

  return (
    <div className='Login'>
      <div className="image">
        <img className='logo' src={SUZA} alt="SUZA Logo" />
      </div>
      <div className="LoginHeader">
        <h2>Student Login</h2>
      </div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={submit}>
        <div className="LoginForm">
          <input
            type="text"
            placeholder='Registration Number'
            value={registrationNumber}
            onChange={(event) => setRegistrationNumber(event.target.value)}
            className='loginInput'
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className='loginInput'
          />
          <div className='buttonContainer'>
            <button type="submit" className='loginBtn'>Login</button>
            <button type="button" className='loginBtn' onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Students;
