import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/login.jsx';
import Navbar from './component/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './component/footer.jsx';


function AppContent() {
  const location = useLocation();
  const navbarPaths = ['/', '/login'];
  const footerPaths = ['/', '/login'];

  return (
    <>
    {!navbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    {!footerPaths.includes(location.pathname) && <Footer />}
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
