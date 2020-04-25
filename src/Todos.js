import React from 'react'

const Todos = ({ todos, deleteTodo }) => {

    const todosList = todos.length ? (
        todos.map( todo => {
            return(
               <div className="collection-item" key={todo.id}>
                    <div onClick={ ()=> { deleteTodo(todo.id)}}> {todo.content} </div>
               </div>
            )
        })
    ) : (
        <p className='center'> You have no more todos left </p>
    )

    return(
        <div className="todos collection">
            { todosList }
        </div>
    )
   
}

export default Todos