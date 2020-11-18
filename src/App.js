import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Default Message");

  const getMessage = async () => {
    const message = await axios.get("https://lc-nodejs.herokuapp.com/");
    console.log(message);
    setMessage(message.data);
  };

  return (
    <div className="App">
      <p>I'm the app</p>
      <p>{message}</p>
      <button onClick={() => getMessage()}>Get New Message</button>
    </div>
  );
}

export default App;
