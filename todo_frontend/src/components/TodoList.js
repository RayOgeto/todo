import React from 'react';
import TodoItem from './todoitem';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
