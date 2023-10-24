import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
// import Intro from './pages/Historiadelmango';
// import BussinessSection from './pages/Comercio'; area donde se van a publicar precios del mercado mango
// import Jobs from './pages/Empleos'; area donde se van a listar empleos solicitados por productores
// import Empacadoras from './pages/Empacadoras'; listado de empacadoras de mango
import Tourims from './pages/Tourism';
import Admin from './pages/Admin';
// admin login import Login from './pages/Login';
import Historiadelmango from "./pages/Historiadelmango";
import Comercio from "./pages/Comercio";
import PrimerasHuertas from "./pages/PrimerasHuertas";
import Tapanatepec from './pages/HistoriaTapana';
import Variedades from "./pages/VariedadesMango";
import Exportacion from "./pages/Exportacion";
import Sanidad from "./pages/Sanidad";
import Riesgos from "./pages/Riesgos";
import Comercializacion from "./pages/Comercializacion";
import CanalesVenta from "./pages/CanalesDeVenta";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/turismo" element={<Tourims/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/historiadelmango" element={<Historiadelmango/>} />
          <Route path="/comercio" element={<Comercio/>} />
          <Route path="/primerashuertas" element={<PrimerasHuertas/>} />
          <Route path="/historiatapana" element={<Tapanatepec/>} />
          <Route path="/variedades" element={<Variedades/>} />
          <Route path="/exportación" element={<Exportacion/>} />
          <Route path="/exportación/sanidad" element={<Sanidad/>} />
          <Route path="/exportación/riesgos" element={<Riesgos/>} />
          <Route path="/comercialización" element={<Comercializacion/>} />
          <Route path="/comercialización/canales-de-venta" element={<CanalesVenta/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
