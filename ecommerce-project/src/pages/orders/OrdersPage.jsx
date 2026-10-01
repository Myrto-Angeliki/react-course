import axios from 'axios';
import { useState, useEffect} from 'react';
import { Header } from '../../components/Header';
import { OrdersGrid } from './OrdersGrid'


import './OrdersPage.css';



export function OrdersPage({ cart, loadCart, isDarkMode, setIsDarkMode }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrderData = async () => {
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        }
        
        fetchOrderData();
    }, []);

    return (
        <>
            <title>Orders</title>
            <link rel="icon" href="orders-favicon.png" />

            <Header cart={cart} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <div className="orders-page" id={isDarkMode ? 'dark-mode' : ''}>
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders} loadCart={loadCart} isDarkMode={isDarkMode}/>
            </div>
        </>
    );
}