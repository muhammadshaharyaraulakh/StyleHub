import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import Verification from './pages/Verification';
import OrderHistory from './pages/OrderHistory';
import OnSale from './pages/OnSale';
import NewArrivals from './pages/NewArrivals';
import Brands from './pages/Brands';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-white text-black selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sale" element={<OnSale />} />
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route path="/brands" element={<Brands />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
