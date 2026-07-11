import { ProductDetails } from './ProductDetails'

export function OrderDetailsGrid({ order, loadCart }) {
    return (
        <div className="order-details-grid">
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