import React from 'react'
import classes from './ProductItem.module.css';
import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const ProductItem = (props) => {
    const { title, price, description, id } = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        const itemToBeAdded = {
            title,
            price,
            id
        };

        dispatch(cartActions.addItemToCart(itemToBeAdded));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>
                        ${price.toFixed(2)}
                    </div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add To Cart</button>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem