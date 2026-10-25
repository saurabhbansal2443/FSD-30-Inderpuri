import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
    console.log(count);
  }
  function handleMinus() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <button onClick={handlePlus}>Plus</button>
      {count}
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
};

export default App;
