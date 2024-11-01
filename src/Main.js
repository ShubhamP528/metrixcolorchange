import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import VideoCall from "./Componants/VideoCall";
import Login from "./Componants/Login";
import Signup from "./Componants/Signup";

const Main = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="p-4">
          <Routes>
            <Route path="/video-call" element={<VideoCall />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Main;
