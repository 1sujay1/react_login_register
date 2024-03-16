import React, { useState } from "react";

function BiDirectional() {
  const [displayVal, setDisplayVal] = useState("");
  const [isActive, setIsActive] = useState(false);

  const passInputVal = (dataVal) => {
    setDisplayVal(dataVal);
  };
  return (
    <div>
      {isActive ? <ChildComponent1 passInputVal={passInputVal} /> : null}

      <br></br>
      {!isActive ? (
        <button onClick={() => setIsActive(true)}>Open Child Component</button>
      ) : (
        <button onClick={() => setIsActive(false)}>
          Close Child Component
        </button>
      )}

      <h2>Displays Child data value : {displayVal}</h2>
    </div>
  );
}

function ChildComponent1({ passInputVal }) {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter input"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
          passInputVal(e.target.value);
        }}
      />
    </div>
  );
}
export default BiDirectional;
