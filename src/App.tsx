import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { messages } from "./translate";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import "./styles/index.scss";

function App() {
  const [lang, setLang] = useState("English");

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Navbar language={lang} handleLangChange={setLang} />
      <div className="product">
        <div className="products__text">
          <img src={products.img} alt="Apple" />
          <h2>{products.name}</h2>
          <p>{products.description}</p>
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
    </IntlProvider>
  );
}

export default App;
