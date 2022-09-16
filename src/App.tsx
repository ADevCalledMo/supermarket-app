import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import translate, { messages } from "./translate";
import { productImages } from "./data/products";
import Navbar from "./components/Navbar";
import "./styles/index.scss";

function App() {
  const [lang, setLang] = useState("English");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Navbar language={lang} handleLangChange={setLang} />
      <div className="storefront">
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
      </div>
      <footer>
        <div className="footer__flex">
          <div className="footer__column">
            <h3>Supermarket</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              veritatis.
            </p>
          </div>
          <div className="footer__column"></div>
          <div className="footer__column">
            <h3>Title</h3>
          </div>
          <div className="footer__column">
            <h3>Title</h3>
          </div>
          <div className="footer__column">
            <h3>Title</h3>
          </div>
          <div className="footer__column">
            <h3>Title</h3>
          </div>
        </div>
      </footer>
    </IntlProvider>
  );
}

export default App;
