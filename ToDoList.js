import { useState, useEffect } from "react";
import "./ToDoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("work");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "" && date !== "" && time !== "") {
      const newTaskObj = { text: newTask, category, date, time, completed: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
      setDate("");
      setTime("");
      scheduleReminder(newTaskObj);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const scheduleReminder = (task) => {
    const taskDateTime = new Date(`${task.date}T${task.time}`);
    const now = new Date();
    const timeDiff = taskDateTime - now;
    
    if (timeDiff > 0) {
      setTimeout(() => {
        showReminderPopup(task.text, task.date, task.time);
      }, timeDiff);
    }
  };

  const showReminderPopup = (taskText, taskDate, taskTime) => {
    const audio = new Audio("https://www.myinstants.com/media/sounds/timer.mp3");
    audio.play();
    alert(`Reminder: ${taskText} is scheduled for ${taskDate} at ${taskTime}!`);
  };

  return (
    <div className="tdbody">
      <div className="todo-container">
        <h1 className="title">To-Do List</h1>
        <p className="date">{new Date().toLocaleDateString()}</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="task-input"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="date-picker"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="time-picker"
          />
          <select
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="work">Work</option>
            <option value="hobby">Hobby</option>
            <option value="important">Important</option>
          </select>
          <button onClick={addTask} className="add-button">+</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`task-item ${task.category} ${task.completed ? "completed" : ""}`}
              onClick={() => toggleTask(index)}
            >
              <input type="checkbox" checked={task.completed} readOnly />
              <span>{task.text} - {task.date} at {task.time}</span>
            </li>
          ))}
        </ul>
        <div className="legend">
          <span className="work">⬤ Work</span>
          <span className="hobby">⬤ Hobby</span>
          <span className="important">⬤ Important</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <TodoList />;
};

export default App;
