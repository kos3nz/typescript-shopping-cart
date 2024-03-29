import CartItem from "../cartItem/CartItem";
// Styles
import { Wrapper } from "./Cart.styles";
// Types
import { CartItemType } from "../App";
import React from "react";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculatePrice = (items: CartItemType[]): number =>
    items.reduce((acc: number, item) => (acc += item.price * item.amount), 0);
  const totalPrice = calculatePrice(cartItems);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3>Total price: ${(totalPrice ? totalPrice : 0).toFixed(2)}</h3>
    </Wrapper>
  );
};

export default Cart;
