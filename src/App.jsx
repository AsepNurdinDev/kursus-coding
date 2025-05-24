import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello Tailwind + Vite + React!
      </h1>
    </>
  );
}

export default App;
