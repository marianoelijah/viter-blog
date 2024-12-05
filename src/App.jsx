import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/pages/frontend/homepage/Homepage';
import Single from './components/pages/frontend/single/Single';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route index element={<Homepage />} />
      <Route path="/single" element={<Single />} />
      </Routes>
    </Router>
  )
}

export default App
