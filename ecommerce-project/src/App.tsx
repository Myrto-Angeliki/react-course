import axios from 'axios'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFoundPage } from './pages/NotFoundPage'

import './App.css'

//window.axios = axios;

function App() {
  const [cart, setCart] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('nightMode') == 'true' || false);

  const loadCart = async () => {
        const response = await axios.get('api/cart-items?expand=product');
        setCart(response.data);
      }

  useEffect(() => {
      loadCart();
    }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />}  />
      <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}      />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>}  />
      <Route path="*" element={<NotFoundPage cart={cart} />}  />
    </Routes>
  )
}

export default App
