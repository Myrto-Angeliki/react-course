import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { formatMoney } from "../../utils/money";


export function CartItemDetails({ cartItem, loadCart }) {
    const [isUpdate, setIsUpdate] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const quantityInputRef = useRef(null);
    const quantityLabelRef = useRef(null);

    const updateCartItem = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(quantity)
        });
        await loadCart();
    };

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    useEffect(() => {
        const quantityInput = quantityInputRef.current;
        const quantityLabel = quantityLabelRef.current;
        if(isUpdate){
            quantityInput.focus();
            quantityInput.style.opacity = 1;
            quantityLabel.style.opacity = 0;
        }   
        else{
            quantityInput.style.opacity = 0;
            quantityLabel.style.opacity = 1;
        }
    }, [isUpdate])

    function deactivateUpdate(){
        setIsUpdate(!isUpdate);
        setQuantity(cartItem.quantity);
    }

    async function handleUpdate(){
        if(isUpdate && quantity && Number(quantity) > 0){
                await updateCartItem();
        }
        deactivateUpdate();
    }

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: 
                            <span className="quantity-label" ref={quantityLabelRef}> {cartItem.quantity}
                            </span>
                            <input  className="quantity-input" 
                                    ref={quantityInputRef} 
                                    type="text"
                                    value={quantity}
                                    onChange={(event) => {
                                        setQuantity(event.target.value)
                                    }} 
                                    onKeyDown={(e) => { 
                                        e.key === 'Enter' 
                                            ? handleUpdate()
                                            : e.key === 'Escape' && deactivateUpdate() ;
                                    }}/>
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={handleUpdate}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}