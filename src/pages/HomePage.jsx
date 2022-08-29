import { useEffect, useState } from 'react';
import { fetchProducts } from '../store/asyncActions/getProducts';
import { useDispatch } from 'react-redux'
// import { getData } from '../utils/getData';
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from './HomePage.module.css';




export function Home() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     getData('').then((res) => res.json()).then(data => setProducts(data));
    // }, []);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <ul className={ styles.product_card }>
                { products.map(product => (
                    <li key={ product.id } className={ styles.product__item }>
                        <ProductCard data={ product } />
                    </li>
                ))
                }
            </ul>
        </div>
    );
};
