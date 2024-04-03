// AppRouter.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import './App.css';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
