import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import styles from './Cart.module.css';

import cart from '../../img/cart.svg';


export const Cart = () => {
    const products = useSelector((state) => state.products.cart)

    let quantity = products.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <NavLink to={ `cart` } className={ ({ isActive }) =>
            isActive ? styles.activeStyle : styles.inactiveStyle
        }>
            <div className={ styles.cart }>
                <img src={ cart } alt='cart' className={ styles.img } />
                <div className={ styles.info1 }>
                    { quantity > 0 ? <div className={ styles.info }>{ quantity }</div> : null }
                </div>

            </div>
        </NavLink>
    );
};
