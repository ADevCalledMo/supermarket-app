import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { messages } from "./translate";
import Navbar from "./components/Navbar";
import "./styles/index.scss";

function App() {
  const [lang, setLang] = useState("English");

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Navbar language={lang} handleLangChange={setLang} />
    </IntlProvider>
  );
}

export default App;
