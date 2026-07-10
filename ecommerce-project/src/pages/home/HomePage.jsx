import axios from 'axios'
import { useState, useEffect } from 'react';
import { ProductsGrid} from './ProductsGrid'
import { Header } from '../../components/Header'
import './HomePage.css'

export function HomePage( {cart} ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('api/products/')
            .then((response) => {
                setProducts(response.data)
            });
    }, []);
    
    

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" href="home-favicon.png" />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}