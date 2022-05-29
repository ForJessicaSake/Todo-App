import React, {useState} from 'react'
import { RiCloseCircleLine} from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Home from './home';


function TodoList({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
const submitUpdate = value =>{
updateTodo(edit.id, value)
setEdit({
    id: null,
    value: ''
})
};
if(edit.id){
    return <Home edit={edit} onSubmit ={submitUpdate}/>
}
    return todos.map((todo, index) => (
        <section className={todo.isComplete ? 'todo-row Complete' : 'todo-row'} key={index}>
            <article key={todo.id} onClick={() => completeTodo(todo.id)} className='todo-box'>
                <p className='todo-text'> {todo.text}</p>  
                <aside className='icons'>
                    <RiCloseCircleLine 
                    className='delete-icon' 
                    onClick={() => removeTodo(todo.id)} />
                   
                    <TiEdit 
                    className='edit-icon'
                    onClick={() => setEdit({id: todo.id, value: todo.text})}/>
                </aside>
            </article>
        </section>
    ))

}
export default TodoList;