import React, { useMemo } from 'react';

const TodoList = ({ todos }) => {
    const renderedTodos = useMemo(() => {
        return todos.map((todo, index) => (
            <div key={index} className={`todo-item ${todo.completed ? 'completed' :
                ''}`}>
                <span>{todo.title}</span>
            </div>
        ));
    }, [todos]);

    return <div className="todo-list">{renderedTodos}</div>;
};

export default TodoList;