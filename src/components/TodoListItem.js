import React from 'react'

export const TodoListItem = ({todo,index,deleteTodo,toogleTodo}) => {
  return (
    <li 
                            key={ todo.id } 
                            className="list-group-item"
                            >
                            
                            <p className={`${todo.done && 'complete'}`}
                                onClick={()=> toogleTodo(todo.id)}
                                >
                                { index + 1 }. { todo.desc } </p>
                        <button 
                                className="btn btn-danger"
                                onClick={() => deleteTodo(todo.id)}
                                >
                            Borrar
                            </button>
                        
                        
                        
                        
                        </li>
  )
}


