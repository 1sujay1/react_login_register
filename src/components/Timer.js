import React, { useEffect, useState } from "react";

function Timer() {
  const [inputVal, setInputVal] = useState("");
  const [counter, setCounter] = useState(0);

  var id;
  useEffect(() => {
    if (inputVal && counter > 0) {
      // if (counter < 0) {
      //   return;
      // }
      id = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [inputVal, counter]);
  const handleClick = () => {
    setCounter(parseInt(inputVal));
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleClick}>Click me</button>
      <h1>TIMER {counter}</h1>
    </div>
  );
}

export default Timer;
