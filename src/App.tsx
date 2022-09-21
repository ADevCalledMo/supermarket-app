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
            <h2>{translate("Apple")}</h2>
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
    </IntlProvider>
  );
}

export default App;
