import "./App.css";
import WelcomePage from "./Page/WelcomePage";
import HomePage from "./Page/HomePage";
import { useState } from "react";

function App() {
  const [isWelcome, setIsWelcome] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "", type: "", value: ''},
  ]);
  return (
    <>
      {isWelcome ? (
        <HomePage
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          setIsWelcome={setIsWelcome}
        />
      ) : (
        <WelcomePage setIsWelcome={setIsWelcome} />
      )}
    </>
  );
}

export default App;
