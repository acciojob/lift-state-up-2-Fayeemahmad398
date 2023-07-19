import React, { useState } from "react";
import "./../styles/App.css";


const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div>{value}</div>
      <div className="child">
        <h1>Child Component</h1>
        <input
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default App;
