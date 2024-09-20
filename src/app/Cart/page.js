"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, decreaseCart, removeFromCart , getTotals } from "../Redux/CreateSlice";
import Link from "next/link";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem)=>{
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem)=>{
    dispatch(addToCart(cartItem))
  }

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-700 my-6">
        Shopping Cart
      </h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart is Currently Empty</p>
          <Link href="/Cardiac-care">
          <button
            type="button"
            className="start-shopping border border-blue-500 text-blue-500 rounded-md px-4 py-2 mt-4 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Start Shopping
          </button>
          </Link>

        </div>
      ) : (
        <div className="cart-container">
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
                    <button
                      type="button"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button type="button" onClick={() =>handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button type="button" onClick={() =>handleIncreaseCart(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button type="button" className="clear-btn" onClick={() =>handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>SubTotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>All the Taxes Counted</p>
              <button type="button">Checkout</button>
              
              <button
                type="button"
                className="continue-shopping border border-green-500 text-green-500 rounded-md px-4 py-2 mt-4 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
