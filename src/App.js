import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingScreen from './components/LandingScreen';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingScreen />} /> // Set LandingScreen as the default route
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>

  );
}

export default App;