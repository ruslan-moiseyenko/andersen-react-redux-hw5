import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getData } from '../utils/getData';
import styles from './ProductPage.module.css';

export const Product = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (error === false) {
            return;
        } else {
            navigate('/not-found');
        }

    }, [error, navigate]);

    useEffect(() => {
        getData(id)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                console.log('error state is: ', error);
            });
    }, [error, id]);

    useEffect(() => {
        if (count < 0) {
            setCount(0);
        }
    }, [count]);

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const minusCount = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const onAddButton = () => {
        // setQuantity((prev) => prev + count);
        // setCost((prev) => (prev + (data.price * count)));
        // setCount(0);
        console.log('onAddButton');
    }

    return (
        <>
            { loading ? (<div>Loading...</div>) :
                (<div className={ styles.wrapper }>
                    <h2 className={ styles.title }>{ data.title }</h2>
                    <img src={ data.image } alt="product" className={ styles.img } />
                    <div className={ styles.description }>Product description:
                        <p className={ styles.description__text }>{ data.description }</p>
                    </div>
                    <div className={ styles.price }>Price: <span className={ styles.price__number }>{ data.price }</span></div>
                    <div className="add-to-cart">
                        <div className={ styles.count }>
                            <button className={ styles.button } onClick={ minusCount }>-</button>
                            <span className='count__text'>{ count }</span>
                            <button className={ styles.button } onClick={ addCount }>+</button>
                        </div>
                        <button className={ styles.addButton } onClick={ onAddButton }>Add to cart</button>
                    </div>

                </div>)
            }
        </>);
};
