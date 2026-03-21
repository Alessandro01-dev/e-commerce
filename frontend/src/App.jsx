import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsSettingsPage from './pages/ProductsSettingsPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import CartPage from './pages/CartPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import PaymentPage from './pages/PaymentPage';
import OrdersHistoryPage from './pages/OrdersHistoryPage';
import SuccessPage from './pages/SuccessPage';
import WishlistPage from './pages/WishlistPage';
import ShopPage from './pages/ShopPage';
import 'swiper/css';
import ProtectedRoutes from './middlewares/ProtectedRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:productId" element={<ProductDetailsPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/accountsettings" element={<AccountSettingsPage />} />
          <Route path="/productssettings" element={<ProductsSettingsPage />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/orders" element={<OrdersHistoryPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Route>

        <Route path="*" element={<div className="text-center mt-5">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App;