import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import TodoAdd from './TodoAdd';


const init = () => {
    
    return JSON.parse(localStorage.getItem('todos')) || [];
    
}

export const TodoApp = () => {
  
    const [todos, dispatch]= useReducer(todoReducer, [], init);
    


    useEffect ( ()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const deleteTodo = (todoId) => {
        
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

     const toogleTodo = (todoId) =>{

        dispatch({
            type:'toggle',
            payload: todoId
        })
     }

     const agregarTodo=(newTodo) => {

        dispatch( {
            type: 'add',
            payload: newTodo
        } )

     }

    return (
    <>
      <h1>Lista TODO ({todos.length}) </h1>
      <hr />
        <div className="row">
        
            <div className="col-7">

                    <TodoList 
                        todos={todos}
                        deleteTodo={deleteTodo}
                        toogleTodo={toogleTodo}

                    />
        
        </div>
            
            <div className="col-5">
                
                <TodoAdd
                    agregarTodo={agregarTodo}
                />
            
            </div>

        </div>

    </>
  )
}




