/* eslint-disable react/jsx-no-undef */
import Header from "./MyComponent/Header";
import {Footer} from "./MyComponent/Footer";
import {Todos} from "./MyComponent/Todos";
import React,{useState, useEffect} from 'react'
import { AddTodo } from "./MyComponent/AddTodo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("I am deleted",todo);
    // let index= todos.indexOf(todo);
    // todos.splice(index,1)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1]+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);  
  }
  
  const[todos,setTodos]=useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
 
  }, [todos])
  return (
    <>
      <Header title="My Todo List" searchbar="true"/>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
