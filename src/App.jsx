import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Exercises from './pages/Exercises';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio sin loguear */}
        <Route path="/es" element={<Welcome />} /> {/* Ruta para la página de inicio logueado */}
        <Route path="/es/ejercicios" element={<Exercises />} /> {/* Ruta para la página de ejercicios*/}
      </Routes>
    </div>
  );
}

export default App;