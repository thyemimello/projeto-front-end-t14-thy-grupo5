import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

export function RoutesImoveis() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
}

export default RoutesImoveis;
