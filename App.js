import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Stats from "./pages/Stats";
import Login from "./pages/Login"; // Login Page
import Register from "./pages/Register"; // Register Page
import ToolsHP from "./pages/homepage/ToolsHP";
import TodoList from "./pages/homepage/ToDoList";
import VoiceTyping from "./pages/homepage/VoiceTyping";
import FunGames from "./pages/homepage/FunGames";
import MatchColorsGame from "./pages/homepage/MatchColors";
import RhymingWordsGame from "./pages/homepage/RhymingWords";
import StudyVideos from "./pages/homepage/StudyVideos";
import SoothingSoundsPage from "./pages/homepage/SoothingSounds";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/toolshp" element={<ToolsHP />} />  
        <Route path="/todo" element={<TodoList />} />
        <Route path="/voicetyping" element={<VoiceTyping />} />
        <Route path="/fungames" element={<FunGames />} />
        <Route path="/matchcolors" element={<MatchColorsGame />} />
        <Route path="/rhymingwords" element={<RhymingWordsGame />} />
        <Route path="/studyvideos" element={<StudyVideos />} />
        <Route path="/soothingsound" element={<SoothingSoundsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
