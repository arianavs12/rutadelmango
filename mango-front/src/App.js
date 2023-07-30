import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Intro from './pages/Historiadelmango';
import BussinessSection from './pages/Comercio';
import Jobs from './pages/Empleos';
import Exportacion from './pages/Empacadoras';
import Tourims from './pages/Tourism';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Historiadelmango from "./pages/Historiadelmango";
import Comercio from "./pages/Comercio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tourims" element={<Tourims/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/historiadelmango" element={<Historiadelmango/>} />
          <Route path="/comercio" element={<Comercio/>} />
        </Routes>
      </BrowserRouter>
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