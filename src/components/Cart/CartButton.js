import React from 'react'
import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = () => {
    const dispatch = useDispatch();
    const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
    console.log(cartTotalQuantity);
    const showCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <button className={classes.button} onClick={showCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartTotalQuantity}</span>
        </button>
    )
}

export default CartButton