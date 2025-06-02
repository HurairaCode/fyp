import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import AiChat from './components/AiChat';
import Setting from './components/Setting';
import MessageScreen from './components/MessageScreen';
import LandingPage from './components/LandingPage';

// Import PrivateRoute
import PrivateRoute from './components/PrivateRoute';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/ai-chat" element={<AiChat />} />
        <Route path="/settings" element={<Setting />} />
        {/* Protect the messages route using PrivateRoute */}
        <Route
          path="/messages"
          element={
            <PrivateRoute>
              <MessageScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
