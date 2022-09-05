import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import messages from "./data/messages";
import "./styles/index.scss";

function App() {
  const [locale, setLocale] = useState<string>("English");

  const handleLocaleChange = (event: any) => {
    setLocale(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleLocaleChange} defaultValue={locale}>
        {["English", "日本語"].map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
      <IntlProvider locale={locale} messages={messages[locale]}>
          <FormattedMessage
            id="Home"
            defaultMessage="Home"
            values={{locale}}
          ></FormattedMessage>
      </IntlProvider>
    </div>
  );
}

export default App;
