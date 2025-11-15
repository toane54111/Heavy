import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Schedule from '../pages/Schedule';
import HabitTracker from '../pages/HabitTracker';
import StudyPlan from '../pages/StudyPlan';
import AIQuestionnaire from '../pages/AIQuestionnaire';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/habits" element={<HabitTracker />} />
      <Route path="/study-plan" element={<StudyPlan />} />
      <Route path="/ai-questionnaire" element={<AIQuestionnaire />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;

