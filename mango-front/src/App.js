/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Intro from './pages/Historiadelmango';
import BussinessSection from './pages/Comercio';
import Jobs from './pages/Empleos';
import Exportacion from './pages/Empacadoras';
import Tourims from './pages/Tourism';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <div className="App">

      <Home /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>
        
      </div>
    </div>
  );
}

export default App;




// <Routes>
          // <Route path="*" element={<Home /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>}/>
          // <Route path="/intro" element={<Intro /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>}/>
          // <Route path="/comercio" element={<BussinessSection /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>} />
          // <Route path="/empleos" element={<Jobs /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>} />
          // <Route path="/bodegas" element={<Exportacion /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>} />
          // <Route path="/turismo" element={<Tourims /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>} />
          // <Route path="/admin" element={<Admin /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>} />
          // <Route path="/access" element={<Login /* authenticate={authenticate} user={user} handleLogout={handleLogout} *//>} />
        // </Routes>