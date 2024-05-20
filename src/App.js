import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesApp from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/header/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
      <ToastContainer autoClose={3500} />
    </BrowserRouter>
  );
}

export default App;
