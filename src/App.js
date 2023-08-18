import { useState } from "react";
import "./index.css";

function App() {
  const [looped, setLooped] = useState(["🌍"]);

  let loopedWord = [];

  let words = ["💋", "🐹", "🐭", "🌍", "⛱️"];

  let randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  for (let index = 0; index < 30; index++) {
    loopedWord.push(randomWord());
  }

  setInterval(() => {
    setLooped(loopedWord);
  }, 1000);

  console.log(loopedWord);

  return (
    <div className="App">
      <div className="text">{looped}</div>
    </div>
  );
}

export default App;
