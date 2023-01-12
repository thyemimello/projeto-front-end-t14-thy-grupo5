import { Routes, Route } from "react-router-dom";
import CheckerProvider from "../contexts/checkerContext";
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
      <Route path="/dashboard" element={<CheckerProvider><Dashboard/></CheckerProvider>}/>
    </Routes>
  );
}

export default RoutesImoveis;
