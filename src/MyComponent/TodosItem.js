import React from 'react'
// import {TodosItem} from "./MyComponent/TodosItem";

export const TodosItem = ({todo,onDelete}) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      <h3>{todo.title}</h3>
      <h3>{todo.desc}</h3>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
