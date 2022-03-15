import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home, Login } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
