import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // when App component renders, also update the document's title
  // but *only* do that when the text variable changes
  useEffect(() => {
    document.title = text;
  }, [text]);

  // when App component renders, set this timeout function
  // in 5 seconds, update state and set the count back to 0
  // only set this timeout function once, not every time the component updates
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
