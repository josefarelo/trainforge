import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import './styles/global.scss';
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Planning from './pages/Planning'
import Exercises from './pages/Exercises';
import MuscleChest from './pages/MuscleChest';
import MuscleBack from './pages/MuscleBack';
import MuscleShoulder from './pages/MuscleShoulder';
import MuscleAbdomen from './pages/MuscleAbdomen';
import MuscleBiceps from './pages/MuscleBiceps';
import MuscleTriceps from './pages/MuscleTriceps';
import MuscleForearm from './pages/MuscleForearm';
import MuscleQuadriceps from './pages/MuscleQuadriceps';
import MuscleHamstring from './pages/MuscleHamstring';
import MuscleGlute from './pages/MuscleGlute';
import MuscleCalf from './pages/MuscleCalf';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio sin loguear */}
          <Route path="/login" element={<Login />} /> {/* Ruta para el inicio de sesión */}
          <Route path="/es" element={ <ProtectedRoute> <Welcome /> </ProtectedRoute> } /> {/* Ruta para la página de inicio logueado */}
          <Route path="/es/planificacion-de-entrenamiento" element={ <ProtectedRoute> <Planning /> </ProtectedRoute> } /> {/* Ruta para la página de planificación de entrenamientos */}
          <Route path="/es/ejercicios" element={ <ProtectedRoute> <Exercises /> </ProtectedRoute> } /> {/* Ruta para la página de ejercicios */}
          <Route path="/es/ejercicios/pecho" element={ <ProtectedRoute> <MuscleChest /> </ProtectedRoute> } /> {/* Ruta para la página del músculo pecho */}
          <Route path="/es/ejercicios/espalda" element={ <ProtectedRoute> <MuscleBack /> </ProtectedRoute> } /> {/* Ruta para la página del músculo espalda */}
          <Route path="/es/ejercicios/hombro" element={ <ProtectedRoute> <MuscleShoulder /> </ProtectedRoute> } /> {/* Ruta para la página del músculo hombro */}
          <Route path="/es/ejercicios/abdomen" element={ <ProtectedRoute> <MuscleAbdomen /> </ProtectedRoute> } /> {/* Ruta para la página del músculo abdomen */}
          <Route path="/es/ejercicios/biceps" element={ <ProtectedRoute> <MuscleBiceps /> </ProtectedRoute> } /> {/* Ruta para la página del músculo bíceps */}
          <Route path="/es/ejercicios/triceps" element={ <ProtectedRoute> <MuscleTriceps /> </ProtectedRoute> } /> {/* Ruta para la página del músculo tríceps */}
          <Route path="/es/ejercicios/antebrazo" element={ <ProtectedRoute> <MuscleForearm /> </ProtectedRoute> } /> {/* Ruta para la página del músculo antebrazo */}
          <Route path="/es/ejercicios/cuadriceps" element={ <ProtectedRoute> <MuscleQuadriceps /> </ProtectedRoute> } /> {/* Ruta para la página del músculo cuádriceps */}
          <Route path="/es/ejercicios/femoral" element={ <ProtectedRoute> <MuscleHamstring /> </ProtectedRoute> } /> {/* Ruta para la página del músculo femoral */}
          <Route path="/es/ejercicios/gluteo" element={ <ProtectedRoute> <MuscleGlute /> </ProtectedRoute> } /> {/* Ruta para la página del músculo glúteo */}
          <Route path="/es/ejercicios/pantorrilla" element={ <ProtectedRoute> <MuscleCalf /> </ProtectedRoute> } /> {/* Ruta para la página del músculo pantorrilla */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;