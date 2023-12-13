import React, { useState, useRef } from "react";

function EightBall({ answers }) {
  const genRandomId = () => Math.floor(Math.random() * answers.length);
  const defaultState = { msg: "Think of a question...", color: "black" };
  const [response, setResponse] = useState(defaultState);
  const timeoutRef = useRef(null);

  const spinEightBall = () => {
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }

    const randomResponse = answers[genRandomId()];
    setResponse(randomResponse);

    timeoutRef.current = setTimeout(() => {
      setResponse(defaultState);
      timeoutRef.current = null;
    }, 2000);
  };

  return (
    <div>
      <div className="eightball" onClick={spinEightBall}>
        <div className="eightball_res">
          <div
            className="triangle"
            style={{ borderBottomColor: response.color }}
          >
            <div className="response-text">{response.msg}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EightBall;
