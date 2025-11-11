import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Signup from './pages/Signup.jsx';

function App() {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
