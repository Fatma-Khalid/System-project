import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Attend.css';
import SUZA from '../Components/Assets/SUZA.jpg';

const Attend = () => {
  const [attends, setAttends] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const nameInput = useRef(null);
  const nyengine = useNavigate(); 

  const addAttendance = async () => {
    const name = nameInput.current.value.trim();
    if (name) {
      try {
        const response = await fetch('http://localhost:5003/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name })
        });
        const result = await response.json();
        if (response.ok) {
          const time = new Date().toLocaleTimeString();
          setAttends(prevAttends => [...prevAttends, { text: name, time }]);
          nameInput.current.value = "";
        } else {
          console.error(result.msg);
        }
      } catch (error) {
        console.error('Error adding attendance:', error);
      }
    }
  };

  const removeAttendance = index => {
    setAttends(prevAttends => prevAttends.filter((_, i) => i !== index));
  };

  return (
    <div className="menu">
      <i className="bi bi-list" onClick={() => setShowMenu(!showMenu)}></i>
      <div className={`sideMenu ${showMenu ? 'show' : ''}`}>
        <div className="menuContent">
          <i className="bi bi-x" onClick={() => setShowMenu(false)}></i>
          <h2>Menu</h2>
          <p className="menuItem" onClick={() => nyengine('/')}>Log Out</p>
          <p className="menuItem" onClick={() => nyengine('/table')}>Timetable</p>
         
        </div>
      </div>
      <div className='Attend'>
        <div className="image">
          <img className='logo' src={SUZA} alt="SUZA logo" />
        </div>
        <div className="AttendHeader">
          STUDENTS ATTENDANCE
          <div className="stuAdd">
            <input ref={nameInput} type="text" placeholder='Enter your name' className='stuInput' />
            <div onClick={addAttendance} className="stuBtn">ENTER</div>
          </div>
          <div className="list">
            <ol>
              {attends.map((attend, index) => (
                <li key={index} className='Names'>
                  {attend.text} - {attend.time}
                  <button className="deleteBtn" onClick={() => removeAttendance(index)}>Delete</button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attend;
