import React, { useState } from 'react';
import Home from './home'
import TodoList from './TodoList';


function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(todo, ...todos);
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos
        ].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;

        })
        setTodos(updatedTodos);
    }

    return (
        <section>
            <header className='form-header'>
                <h1>What Are Your Plans For Today?</h1>
            </header>
            <Home onSubmit={addTodo} />

            <TodoList todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}

            />
        </section>
    )
}
export default Todo;