import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/login.jsx';
import Navbar from './component/Navbar.jsx';


function AppContent() {
  const location = useLocation();
  const navbarPaths = ['/', '/login'];

  return (
    <>
    
    {!navbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
