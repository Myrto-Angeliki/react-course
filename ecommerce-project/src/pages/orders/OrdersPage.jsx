import axios from 'axios';
import { useState, useEffect, useContext} from 'react';
import { Header } from '../../components/Header';
import { OrdersGrid } from './OrdersGrid'


import './OrdersPage.css';
import { DarkModeContext } from '../../contexts/DarkModeContext';



export function OrdersPage({ cart, loadCart}) {
    const [orders, setOrders] = useState([]);
    const { isDarkMode } = useContext(DarkModeContext);

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

            <Header cart={cart} />

            <div className="orders-page" id={isDarkMode ? 'dark-mode' : ''}>
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders} loadCart={loadCart} />
            </div>
        </>
    );
}