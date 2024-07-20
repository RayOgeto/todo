import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/todoform';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/todos/')
            .then(res => setTodos(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoList todos={todos} />
            <TodoForm />
        </div>
    );
}

export default App;
