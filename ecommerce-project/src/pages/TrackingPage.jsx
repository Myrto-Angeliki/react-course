import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import dayjs from 'dayjs';
import { Header } from '../components/Header';
import { getDeliveryPercent } from '../utils/deliveryPercent'

import './TrackingPage.css'

export function TrackingPage({ cart }) {
    const {orderId, productId} = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchTrackinData = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        }

        fetchTrackinData();
    }, [orderId]);

    if(!order){
        return null
    }    

    const selectedOrderProduct = order.products
        .find((orderProduct) => {
            return orderProduct.productId === productId;
        });
    const deliveryPercent = getDeliveryPercent(
                                selectedOrderProduct.estimatedDeliveryTimeMs
                                , order.orderTimeMs)
    const isPreparing = deliveryPercent < 33 ? true : false;
    const isShipped =  (deliveryPercent >= 33 && deliveryPercent < 100) ? true : false;
    const isDelivered = deliveryPercent === 100 ? true : false;
                    
    return (
        <>
            <title>Tracking</title>

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on {dayjs(selectedOrderProduct.estimatedDeliveryTimeMs)
                                        .format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {selectedOrderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {selectedOrderProduct.quantity}
                    </div>

                    <img className="product-image" 
                        src={selectedOrderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${isShipped && 'current-status'}`} >
                            Shipped
                        </div>
                        <div className={`progress-label ${isDelivered && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" 
                            style={{width: 
                                `${deliveryPercent}%`}}>
                                </div>
                    </div>
                </div>
            </div>
        </>
    );
}