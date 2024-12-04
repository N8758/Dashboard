import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TaskDashboard from "./components/TaskDashboard";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/tasks" />} />
    <Route path="/tasks" element={<TaskDashboard />} />
  </Routes>
);

export default App;
