import { Route, Navigate, Routes } from "react-router-dom";
import Profil from "./pages/Profil";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/18" replace />} />
      <Route path="/:id" element={<Profil />} />
    </Routes>
  );
}

export default App;
