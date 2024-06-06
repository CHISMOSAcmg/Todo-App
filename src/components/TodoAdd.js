import React from 'react'
import { useForm } from '../hooks/useForm';

const TodoAdd = ({agregarTodo}) => {
 
    const [ {description}, addTodoChange, reset] = useForm({
        description:''
    });  
 
    const addTodo = (e) => {

        e.preventDefault();
        if ( description.trim().lenght <= 1) {
            return ;}


            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };
    
    
        
        agregarTodo(newTodo);
        reset();
    }

    return (
    <>
    <h4>Agregar Todo</h4>
                
                <form onSubmit={addTodo}>

                    <input 
                        type="text"
                        name = "description"
                        className="form-control"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        value={description}
                        onChange={addTodoChange}
                        
                    />

                    <button
                    type = "submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>

                    
                </form>
                </>
  )
}

export default TodoAdd
