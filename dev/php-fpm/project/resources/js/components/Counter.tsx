import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <p>The perfect counter!</p>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "2rem" }}>{count}</p>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: "1rem" }}>
        -
      </button>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;