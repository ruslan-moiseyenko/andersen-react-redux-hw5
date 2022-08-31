import { useDispatch } from 'react-redux';
import { deliteFromCart } from '../../store/actions';
import styles from './CartItem.module.css';


export const CartItem = ({ item }) => {
  const { title, id, image, price, quantity } = item;
  const dispatch = useDispatch();
  let inTotal = price * quantity;

  const handleClick = () => {
    dispatch(deliteFromCart(id));
  };


  return (
    <>
      <div className={ styles.columnsHeadersWrapper }>
        <ul className={ styles.columnsHeaders }>
          <li className={ styles.columnID }>{ id }</li>
          <li className={ styles.columnName }>
            <img src={ image } className={ styles.img } alt={ `${title}` } />
            <div className={ styles.name }>{ title }</div>
          </li>
          <li className={ styles.columnPrice }>{ price }</li>
          <li className={ styles.columnQuantity }>{ quantity }</li>
          <li className={ styles.columnTotal }>{ inTotal }</li>
          <li className={ styles.columnDelite }>
            <button className={ styles.deliteBtn } onClick={ handleClick } >Delete</button>
          </li>
        </ul>
      </div>
      <hr className={ styles.underline } />
    </>);
}