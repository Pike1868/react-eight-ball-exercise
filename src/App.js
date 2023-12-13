import React from "react";
import EightBall from "./EightBall";
import defaultAnswers from "./defaultAnswers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="ball_container">
        <EightBall answers={defaultAnswers} />
      </div>
    </div>
  );
}

export default App;
