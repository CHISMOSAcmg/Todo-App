import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, deleteTodo, toogleTodo}) => {
  return (
    <ul className = "list-group list-group-flush">
                    {
                        todos.map( (todo, i) =>(
                        
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                index={i}
                                deleteTodo={deleteTodo}
                                toogleTodo={toogleTodo}
                            
                            
                            />

                        ))
                    }


        </ul>
  )
}


