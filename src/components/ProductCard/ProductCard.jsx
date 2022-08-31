import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';
import { NavLink } from "react-router-dom";
import styles from './ProductCard.module.css';

export const ProductCard = ({ data = {} }) => {
    const { title, price, image, id } = data;
    const dispatch = useDispatch();

    const onAddButton = () => {
        let quantity = 1;
        dispatch(addToCart({ title, price, image, id, quantity }));
    }

    return (
        <div className={ styles.wrapper }>
            <img src={ image } className={ styles.image } alt='product'></img>
            <NavLink to={ `product/${id}` } className={ ({ isActive }) =>
                isActive ? styles.activeStyle : styles.inactiveStyle
            }>
                <div className={ styles.title }>{ title }</div>
            </NavLink>
            <div className={ styles.price }>Price: { price }</div>
            <button className={ styles.addButton } onClick={ onAddButton }>Add to cart</button>
        </div>
    );
};
