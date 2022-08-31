import { useSelector } from 'react-redux';
import { CartItem } from '../components/CartItem/CartItem';
import { emptyCart } from '../store/actions';
import { useDispatch } from 'react-redux';
import styles from './CartPage.module.css';


export function CartPage() {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.products.cart);
  const totalPrice = productsInCart.reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price, 0)

  const handleClearCartClick = () => {
    dispatch(emptyCart());
  }

  return (
    <div className={ styles["cart-page"] }>
      <h2 className={ styles.header }>Shopping Cart</h2>
      <div className={ styles.columnsHeadersWrapper }>
        <ul className={ styles.columnsHeaders }>
          <li className={ styles.columnID }>ID</li>
          <li className={ styles.columnName }>Name</li>
          <li className={ styles.columnPrice }>Price</li>
          <li className={ styles.columnQuantity }>Quantity</li>
          <li className={ styles.columnTotal }>In total</li>
          <li className={ styles.columnDelite }>Delete</li>
        </ul>
      </div>
      <hr className={ styles.underline } />

      { productsInCart.map(item => <CartItem key={ item.id } item={ item } />) }

      <div className={ styles.totalPrice }> Total: { totalPrice }</div>
      <button className={ styles.clearCart } onClick={ handleClearCartClick }>Empty the cart</button>
      <button className={ styles.checkout } disabled>Checkout</button>
    </div>
  );
}