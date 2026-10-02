import { useContext } from 'react';
import { Product } from './Product'
import { DarkModeContext } from '../../contexts/DarkModeContext';

export function ProductsGrid({ products, loadCart}) {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className="products-grid" id={isDarkMode ? 'dark-mode' : ''}>
            {products.map((product) => {
                return (
                    <Product key={product.id} product={product} loadCart={loadCart} />
                );
            })}
        </div>
    );
}