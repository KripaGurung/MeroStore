import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/login.jsx';
import Navbar from './component/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './component/Footer.jsx';
import Product from './pages/product.jsx';
import Cart from './pages/cart.jsx';
import ProductDetails from './pages/productDetails.jsx';

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
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-xl text-gray-600">404 - Page Not Found</div>} />
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