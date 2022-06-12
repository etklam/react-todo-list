import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
    <div className="App">
      <div>
        <header>
          <h1>Todo List</h1>
        </header>
          <Form inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos}/>
          <TodoList />
      </div>
    </div>
  );
}

export default App;
