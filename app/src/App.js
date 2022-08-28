import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Messenger from "./components/Messenger/Messenger";
import Friends from "./components/Friends/Friends";
import Language from "./components/Language/Language";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messaging" element={<Messenger />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/languages" element={<Language />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
