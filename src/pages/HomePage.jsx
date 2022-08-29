import { useEffect, useState } from 'react';
import { fetchProducts } from '../store/asyncActions/getProducts';
import { useDispatch, useSelector } from 'react-redux'
// import * as actions from '../store/actions';
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from './HomePage.module.css';




export function Home() {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);


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
