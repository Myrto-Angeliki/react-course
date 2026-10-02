import { useContext } from 'react';
import { ProductDetails } from './ProductDetails'
import { DarkModeContext } from '../../contexts/DarkModeContext';

export function OrderDetailsGrid({ order, loadCart}) {
    const { isDarkMode } = useContext(DarkModeContext);
    
    return (
        <div className="order-details-grid" id={isDarkMode ? 'dark-mode' : ''}>
            {order.products && order.products.map((productDetails) => {
                return (
                    <ProductDetails key={productDetails.productId} 
                        order={order}
                        productDetails={productDetails}
                        loadCart={loadCart}
                    />
                );
            })}
        </div>
    );
}