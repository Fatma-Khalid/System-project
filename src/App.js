import React, { useState } from 'react';
import Login from './components/Login';
import Attendance from './components/Attendance';
import './App.css';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Attendance token={token} />}
    </div>
  );
};

export default App;