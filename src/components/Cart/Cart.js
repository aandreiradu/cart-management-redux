import React from 'react'
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      {cartItems.length === 0 ?
        <h2>Your Cart Is Empty. Maybe add some products? :)</h2>
        :
        <h2>Your Shopping Cart</h2>
      }
      <ul>
        {cartItems && cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={{ title: cartItem.title, quantity: cartItem.quantity, total: cartItem.totalPrice, price: cartItem.price, id: cartItem.id }} />
        ))}
      </ul>
    </Card>
  )
}

export default Cart