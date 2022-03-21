import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WishListScreen = () => {
  return (
    <div>
      <Header title="WishList" />
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h1>Wishlist</h1>
              <div>Price</div>
            </li>
            <div>Cart is empty</div>
            <li>
              <div className="cart-image"></div>
              <div className="cart-name">
                <div>
                  Qty:
                  <select></select>
                  <button type="button" className="button" ml-3>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WishListScreen;
