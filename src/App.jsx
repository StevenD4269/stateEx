import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // State variables
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(["Ready", "Set", "GO"]);

  return (
    <div>
      {/* 1. Add an h1 with a simple title */}
      <h1>Todo List</h1>

      {/* 2. Create a form with a text input and a button */}
      <form>
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          onSubmit={(eventVar) => event.preventDefault()
        >
        <button type="submit">Add</button> </form>

      {/* 3. Create an empty unordered list and 4. Render the list */}
      <ul>
        {Array.isArray(todoList) && //was getting error .map is not a function
          todoList.map((item, index) => (
            // 5. Inside the map callback function, return a <li> element
            <li key={index}>{item}</li>
            // 6. Give the <li> element a key prop with a unique identifier
            // {item} represents the current todo item being iterated over in the map() function}
          ))}
      </ul>
    </div>
  );
}

export default App;

// 1. make useStates first, one will give you an empty state and the other will make a statement

{
  /* 
Basic Syntax for a input field and button:
<input
  type="text"
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
  placeholder="Add a new todo"
/>

<button type="submit">Add</button> */
}
