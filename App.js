import React, { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputValue) return;
    setTasks([...tasks, inputValue]);
    setCompleted([...completed, false]);
    setInputValue("");
  }

  function handleCompletedChange(index) {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  }

  function handleDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    const newCompleted = [...completed];
    newCompleted.splice(index, 1);
    setCompleted(newCompleted);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button>Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={completed[index]}
                onChange={() => handleCompletedChange(index)}
              />
              <span
                className={completed[index] ? "completed" : ""}
                onClick={() => handleCompletedChange(index)}
              >
                {task}
              </span>
            </label>
            <button onClick={() => handleDelete(index)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

App.propTypes = {};

export default App;
