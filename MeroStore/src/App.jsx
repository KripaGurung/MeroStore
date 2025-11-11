import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/login.jsx';

function App() {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
