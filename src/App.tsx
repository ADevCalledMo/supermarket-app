import React, { useState } from "react";
import messages from "./data/messages";
import "./styles/index.scss";

function App() {
  const [locale, setLocale] = useState(messages.en.Hello);

  console.log(locale);

  const handleLangChange = () => {}

  return (
    <div className="App">
      <div>
        <button>Change Language</button>
      </div>
      <div>{locale}</div>
    </div>
  );
}

export default App;
