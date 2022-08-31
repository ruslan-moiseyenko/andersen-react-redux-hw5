import { useEffect } from 'react';
import { fetchProducts } from '../store/asyncActions/getProducts';
import { changeLimit } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from './HomePage.module.css';




export function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const limit = useSelector((state) => state.products.limit);

    useEffect(() => {

        dispatch(fetchProducts(limit));
    }, [dispatch, limit]);

    const onLoadMoreClick = () => {
        dispatch(changeLimit());
        // console.log('on load more button click');
    };

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
            <button className={ styles.loadMoreProducts } onClick={ onLoadMoreClick }>Load More</button>
        </div>

    );
};
