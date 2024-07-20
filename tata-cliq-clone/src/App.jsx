import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => (
  <AuthProvider>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  </AuthProvider>
);

export default App;

