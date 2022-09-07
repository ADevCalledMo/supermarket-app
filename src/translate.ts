import { createIntl, createIntlCache } from "react-intl";

// English and Japanese messages translated
export const messages = {
  English: {
    Hello: "Hello",
    Home: "Home",
    About: "About",
    Supermarket: "Supermarket"
  },
  Japanese: {
    Hello: "こんにちは",
    Home: "ホーム",
    About: "アバウト",
    Supermarket: "スーパマーケット"
  },
};

// Prevents Memory Leak
const cache = createIntlCache();

// Allows Formatting of things outside of the Provider...
// has cache to prevent memory leak
// makes default language English
let int = createIntl(
  {
    locale: "English",
    messages: messages["English"],
  },
  cache
);

// Another createIntl function to change the language..
// can be used outside of file
// changes int on line 24 to whatever new langauge is...
export function changeLanguage(lang: string) {
  const newIntl = createIntl(
    {
      locale: lang,
      messages: messages[lang],
    },
    cache
  );
  int = newIntl;
}

// Translates whatever the Intl is
// takes in id (which is a string)
// takes in values (which is an object)
// returns a formatted message based on what was passed in
const translate = (id: string, values?: {}) => {
  return int.formatMessage({ id }, values);
};

export default translate;
