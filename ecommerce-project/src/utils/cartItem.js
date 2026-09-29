import axios from "axios";

export async function incrementCartItemQuantity(cartItem, loadCart){
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: (cartItem.quantity + 1)
        });
        await loadCart();
    };