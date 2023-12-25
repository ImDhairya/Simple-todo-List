import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import "./App.css";
import List from "./components/List/List";
import { ListItem } from "@mui/material";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    const newTodoItem = {
      id: uuid4(),
      item: text,
      done: false,
    };
    setTodoList([...todoList, newTodoItem]);
    setText("");
  };

  const handleDelete = (itemId) => {
    const newTodoItem = todoList.filter((list) => list.id !== itemId);
    setTodoList(newTodoItem);
  };

  const deleteAll = () => {
    setTodoList([]);
  }

  const handleToggle = (itemId) => {
    const newTodoItem = todoList.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, done: !listItem.done };
      }
      return listItem;
    });
    setTodoList(newTodoItem);
  };
  // console.log(todoList);

  return (
    <>
      <div className="App">
        <h1>To Do List</h1>
        <div className="adder">
          <input
            type="text"
            placeholder="Add Items To Your List"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <span onClick={addItem}>+</span>
        </div>

        {todoList.length > 0 && (
          <List
            todoList={todoList}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            deleteAll={deleteAll}
          />
        )}
      </div>
    </>
  );
}

export default App;
