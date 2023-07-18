import React from 'react'
import {TodosItem} from "./TodosItem";
export const Todos = (props) => {
    let myStyle={
        minHeigth:"70vh",
        margin:"10px auto"
    }
  return (
    <div><h3 className='text-center'>Todo List</h3>
    {props.todos.length===0?"No todos to display": props.todos.map((todo)=>{
        return (<><TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/></>)
    })}
   
    </div>
  )
}
