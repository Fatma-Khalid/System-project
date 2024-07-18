import { useState, useEffect } from 'react';
import './CSS/Students.css';
import SUZA from '../Components/Assets/SUZA.jpg'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  const fetchRegisteredUsers = () => {
    fetch('http://localhost:5003/api/students')
      .then(response => response.json())
      .then(data => {
        setRegisteredUsers(data);
      })
      .catch(error => console.error('Error fetching registered users:', error));
  };

  const submit = (event) => {
    event.preventDefault();
    setError('');

    if (!name || !registrationNumber || !password || !repeatPassword) {
      setError('All fields are required');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    
    
    const userExists = registeredUsers.some(user => user.registrationNumber === registrationNumber);
    if (userExists) {
      setError('Registration number already exists');
      return;
    }

    fetch('http://localhost:5003/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullname: name, registrationNumber, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.msg) {
          fetchRegisteredUsers(); 
          navigate('/'); 
        } else {
          setError('Registration failed');
        }
      })
      .catch(error => {
        setError('An error occurred during registration');
      });
  };

  return (
    <div className='Login'>
      <div className="image">
        <img className='logo' src={SUZA} alt="SUZA Logo" />
      </div>
      <div className="LoginHeader">
        <h2>Student Register</h2>
      </div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={submit}>
        <div className="LoginForm">
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='loginInput'
          />
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
          <input
            type="password"
            placeholder='Repeat Password'
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
            className='loginInput'
          />
          <div className='buttonContainer'>
            <button type="submit" className='loginBtn'>Register</button>
            <button type="button" className='loginBtn' onClick={() => navigate('/')}>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
