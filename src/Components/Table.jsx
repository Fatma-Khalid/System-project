import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Table.css';
import SUZA from '../Components/Assets/SUZA.jpg';

const Table = () => {
  const nyengine = useNavigate();

  return (
    <div className='Table'>
      <div className='header'>
        <div className='center-text'>
          <img src={SUZA} alt="SUZA Logo" className='logo' />
          <div>
            <div className='main-title'><b>SUZA - SCHOOL OF BUSINESS</b></div>
            <div className='sub-title'>2023/2024 SEMESTER 2</div>
          </div>
        </div>
        <div className='left-text'>
          <span>BITA - Y2</span>
        </div>
      </div>
      <table className='tableContent'>
        <thead>
          <tr>
            <th></th>
            <th><b>8:00 - 9:00</b></th>
            <th><b>9:00 - 10:00</b></th>
            <th><b>10:00 - 11:00</b></th>
            <th><b>11:30 - 12:30</b></th>
            <th><b>13:00 - 14:00</b></th>
            <th><b>14:00 - 15:00</b></th>
            <th><b>15:00 - 16:00</b></th>
            <th><b>16:00 - 17:00</b></th>
            <th><b>17:00 - 18:00</b></th>
            <th><b>18:00 - 19:00</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='date-column'><b>Mo</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="3"><b>NT822 LAB3 MR RASHID</b></td>
            <td colSpan="3"><b>RM822 MAJOTO Dr. WAZIRI</b></td>
            <td></td>
          </tr>
          <tr>
            <td className='date-column'><b>Tu</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="3"><b>IT812 LAB2 MR. HABIB</b></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='date-column'><b>We</b></td>
            <td colSpan="3"><b>PT822 LAB2 MR. OMAR</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='date-column'><b>Th</b></td>
            <td colSpan="3"><b>WT822 LAB3 MR. MASOUD</b></td>
            <td colSpan="3"><b>MT822 LAB3 MR. AKRAM</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='date-column'><b>Fr</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='date-column'><b>Sa</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className='course-keys'>
        <ul>
          <li><b>IT 812</b> Computerized Accounting Application</li>
          <li><b>MT822</b> Mobile Application Development</li>
          <li><b>NT822</b> Data Communication and Networking</li>
        </ul>
        <ul>
          <li><b>PT822</b> Ms. Visual Programming</li>
          <li><b>RM822</b> Research and Consultancy Methodology</li>
          <li><b>WT822</b> Advanced Website Programming</li>
        </ul>
      </div>
      <button className='back-button' onClick={() => nyengine('/Attend')}>Back</button>
    </div>
  );
};

export default Table;