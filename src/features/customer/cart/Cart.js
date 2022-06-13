import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "./CartLSlice";
import "./Cart.css";

import { Link } from "react-router-dom";
import {
  fetchCartDetailData,
  fetchDeleteCartDetail,
  selectCartDetails,
} from "./CartSlice";
import productAPI from "../../../api/ProductApi";
import CartDetailAPI from "../../../api/CartDetailApi";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartDetailData());
  }, []);
  const [products, setProducts] = useState([]);
  const carts = useSelector(selectCartDetails);
  console.log(products);
  console.log(carts);
  useEffect(() => {
    (async () => {
      const CartDetail = await CartDetailAPI.getAllCartDetails();
      console.log(CartDetail);
      CartDetail.data.forEach(async (cartDetail) => {
        const product = await productAPI.getProductById(cartDetail.productId);
        setProducts((p) => [...p, product.data]);
      });
    })();
  }, []);

  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (id) => {
    console.log(id);
    dispatch(fetchDeleteCartDetail(id)).unwrap();
    dispatch(fetchCartDetailData());
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {carts.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              ⬅️
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {carts &&
              carts.map((cartItem) => {
                return (
                  <>
                    {products.map((product) => {
                      if (product.product_id === cartItem.productId) {
                        return (
                          <div
                            className="cart-item"
                            key={cartItem.cartDetailId}
                          >
                            <div className="cart-product">
                              <img
                                src={product.product_img}
                                alt={product.product_name}
                              />
                              <div>
                                <h3>{product.product_name}</h3>
                                {/* <p>{cartItem.desc}</p> */}
                                <button
                                  onClick={() =>
                                    handleRemoveFromCart(cartItem.cartDetailId)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                            <div className="cart-product-price">
                              {product.product_price} đ
                            </div>
                            <div className="cart-product-quantity">
                              <button
                                onClick={() => handleDecreaseCart(cartItem)}
                              >
                                -
                              </button>
                              <div className="count">
                                {cartItem.cartProductQuanity}
                              </div>
                              <button onClick={() => handleAddToCart(cartItem)}>
                                +
                              </button>
                            </div>
                            <div className="cart-product-total-price">
                              $
                              {product.product_price *
                                cartItem.cartProductQuanity}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </>
                );
              })}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${carts.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  ⬅️
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
