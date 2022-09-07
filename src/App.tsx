import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import translate, { changeLanguage, messages } from "./translate";

import "./styles/index.scss";

function App() {
  const [lang, setLang] = useState("English");

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div>
        <h1>{translate("Supermarket")}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setLang("Japanese");
            changeLanguage("Japanese");
          }}
          disabled={lang === "Japanese"}
        >
          <span aria-label="jp-flag" role="img">
            🇯🇵
          </span>
          日本語
        </button>
        <button
          onClick={() => {
            setLang("English");
            changeLanguage("English");
          }}
          disabled={lang === "English"}
        >
          <span aria-label="en-flag" role="img">
            🇬🇧
          </span>
          English
        </button>
      </div>
    </IntlProvider>
  );
}

export default App;
