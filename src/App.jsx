import { Route, Routes } from "react-router-dom";
import Attend from "./Components/Attend";
import Students from "./Components/Students";
import Register from "./Components/Register";
import Table from "./Components/Table"; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/attend" element={<Attend />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} /> 
        
        
        
      </Routes>
    </div>
  );
};

export default App;