import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path={'/'} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
