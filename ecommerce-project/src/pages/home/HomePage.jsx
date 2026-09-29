import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { ProductsGrid} from './ProductsGrid'
import { Header } from '../../components/Header'
import './HomePage.css'

export function HomePage( {cart, loadCart} ) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const searchString = searchParams.get('search');

    useEffect(() => {
        const fetchHomeData = async () => {
            const response = searchString ? await axios.get(`/api/products/?search=${searchString}`)
                                     : await axios.get('/api/products/');
            //const response = await axios.get('/api/products');
            setProducts(response.data)
        };

        fetchHomeData();
    }, [searchString]);
    

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" href="home-favicon.png" />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}