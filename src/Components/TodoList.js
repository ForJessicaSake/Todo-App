import React, { useState } from 'react'
// import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti';
import Home from './home';
import {motion} from 'framer-motion'


function TodoList({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    };
    if (edit.id) {
        return <Home edit={edit} onSubmit={submitUpdate} />
    }
    const todoVariant = {
        hidden: {
            x: '-100vw'
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5, duration: 5, type: 'spring', stiffness: 200
            }
        }

    }


return todos.map((todo, index) => (
    <section className={todo.isComplete ? 'todo-row Complete' : 'todo-row'} key={index}>
        <motion.article key={todo.id} onClick={() => completeTodo(todo.id)} className='todo-box'
            variants={todoVariant}
            initial='hidden'
            animate='visible'
        >
            <p className='todo-text'> {todo.text}</p>
            <aside className='icons'>
                {/* <RiCloseCircleLine
                    className='delete-icon'
                    onClick={() => removeTodo(todo.id)} /> */}

                <TiEdit
                    className='edit-icon'
                    onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            </aside>
        </motion.article>
    </section>
))

}
export default TodoList;