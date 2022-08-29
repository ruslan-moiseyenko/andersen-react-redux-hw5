import styles from './Cart.module.css';
import cart from '../../img/cart.svg';


export const Cart = () => {
    return (
        <div className={ styles.cart }>
            <img src={ cart } alt='cart' className={ styles.img } />
            {/* <div className={ styles.info }>
                <div className={ styles.info1 }>Items in the cart: { quantity }</div>
                <div className={ styles.info1 }>Total cost: { cost }</div>
            </div> */}

        </div>
    );
};
