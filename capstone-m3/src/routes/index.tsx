import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

export function RoutesImoveis() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default RoutesImoveis;
