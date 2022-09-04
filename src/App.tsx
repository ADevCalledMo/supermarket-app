import React, { useState } from "react";
import messages from "./data/messages";
import "./styles/index.scss";

function App() {
  const [locale, setLocale] = useState("English");

  return (
    <div className="App">
      <div>
        <select
          name="lang"
          id="lang"
          onChange={(e) => setLocale(e.target.value)}
        >
          <option value="English">English</option>
          <option value="日本語">日本語</option>
        </select>
      </div>
      <div>
        {locale === "English" ? (
          <h1>{messages.en.Hello}</h1>
        ) : (
          <h1>{messages.jp.Hello}</h1>
        )}
      </div>
    </div>
  );
}

export default App;
