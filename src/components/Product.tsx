import React from "react";
import { productImages } from "src/data/products";
import translate from "src/translate";

const Product = () => {
  return (
    <div className="product">
      <div className="products__text">
        <div className="product__image">
          <img src={productImages.AppleImage} alt="Apple" />
        </div>
        <h2>
          {translate("Apple")} <span>Price {translate("ApplePrice")}</span>
        </h2>
        <p>{translate("AppleDesc")}</p>
      </div>
      <div className="products__buttons__quantity">
        <button onClick={handleIncrement} disabled={count === 9}>
          +
        </button>
        <span>{count}</span>
        <button onClick={handleDecrement} disabled={count === 0}>
          -
        </button>
      </div>
      <div className="products__addToBasket">
        <button>{translate("AddToBasket")}</button>
      </div>
    </div>
  );
};

export default Product;
