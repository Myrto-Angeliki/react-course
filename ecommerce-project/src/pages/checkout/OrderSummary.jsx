import { DeliveryOptions } from './DeliveryOptions'
import { CartItemDetails } from './CartItemDetails'
import { DeliveryDate } from './DeliveryDate'
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

export function OrderSummary({ cart, deliveryOptions, loadCart}) {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                return (
                    <div key={cartItem.productId} className="cart-item-container" id={isDarkMode ? 'dark-mode' : ''}>
                        <DeliveryDate  
                            deliveryOptions={deliveryOptions}
                            cartItem={cartItem}
                        />

                        <div className="cart-item-details-grid">
                            <CartItemDetails 
                                cartItem={cartItem} 
                                loadCart={loadCart}
                            />
                            <DeliveryOptions  
                                deliveryOptions={deliveryOptions}
                                cartItem={cartItem}
                                loadCart={loadCart}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}