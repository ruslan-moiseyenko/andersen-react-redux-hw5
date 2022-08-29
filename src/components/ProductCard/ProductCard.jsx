// import {useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styles from './ProductCard.module.css';

export const ProductCard = ({ data = {} }) => {
    const { title, price, image, id } = data;

    let inactiveStyle = {
        textDecoration: "none",
    };

    const onAddButton = () => {
        // setQuantity((prev) => prev + 1);
        // setCost((prev) => (prev + price));
        console.log('onAddButton');
    }

    return (
        <div className={ styles.wrapper }>
            <img src={ image } className={ styles.image } alt='product'></img>
            <NavLink to={ `product/${id}` } className={ ({ isActive }) =>
                isActive ? styles.activeStyle : inactiveStyle
            }>
                <div className={ styles.title }>{ title }</div>

            </NavLink>
            <div className={ styles.price }>Price: { price }</div>
            <button className={ styles.addButton } onClick={ onAddButton }>Add to cart</button>
        </div>
    );
};
