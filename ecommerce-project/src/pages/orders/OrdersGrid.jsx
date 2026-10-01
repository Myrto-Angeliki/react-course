import { OrderDetailsGrid } from './OrderDetailsGrid'
import { OrderHeader } from './OrderHeader'

export function OrdersGrid({ orders, loadCart, isDarkMode }) {
    return (
        <div className="orders-grid">
            {orders && orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">
                        <OrderHeader order={order} isDarkMode={isDarkMode}/>

                        <OrderDetailsGrid order={order} loadCart={loadCart} />
                    </div>
                );
            })}
        </div>
    );
}