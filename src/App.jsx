import { useState } from "react";
import "./App.css";
import TodoList from "./tasks/TodoList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <TodoList />
    </div>
  );
}

export default App;
