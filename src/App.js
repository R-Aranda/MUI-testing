import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import UserNavBar from "./NavBar/UserNavBar";
import RegisterPage from "./Pages/Register/RegisterPage";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/home" element={<RegisterPage />} />
          <Route exact path="/signin" element={<RegisterPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
