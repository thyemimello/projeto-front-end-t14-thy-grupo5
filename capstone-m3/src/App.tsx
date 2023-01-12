import UserProvider from "./contexts/UserContext";
import { RoutesImoveis as Routes } from "./routes";
import Global from "./styles/global";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Global />
        <UserProvider>
        <Routes />
      </UserProvider>
      
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>
    </div>
  );
}

export default App;
