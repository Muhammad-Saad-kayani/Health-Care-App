"use client";

import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart is Currently Empty</p>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Products</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <button type="button">Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button type="button">-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button type="button">+</button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button type="button" className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>SubTotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>All the Taxes Counted</p>
              <button type="button">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
