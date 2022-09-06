type Messages = {
  [key: string]: {
    Hello: string;
    Home: string;
    About: string;
  };
  日本語: {
    Hello: string;
    Home: string;
    About: string;
  };
};

const messages: Messages = {
  English: {
    Hello: "Hello",
    Home: "Home",
    About: "About",
  },
  日本語: {
    Hello: "こんにちは",
    Home: "ホーム",
    About: "アバウト",
  },
};

export default messages;
