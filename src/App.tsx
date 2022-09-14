import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import translate, { messages } from "./translate";
import { productImages } from "./data/products";
import Navbar from "./components/Navbar";
import "./styles/index.scss";

function App() {
  const [lang, setLang] = useState("English");

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
            <button>+</button>
            <span>0</span>
            <button>-</button>
          </div>
          <div className="products__addToBasket">
            <button>Add to Basket</button>
          </div>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
