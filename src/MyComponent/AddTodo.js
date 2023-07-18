import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description can not be blanck")
        }
        props.addTodo(title,desc)
    }
  return (
    <div classNameName="container" my-3>
        <h3>Add todo List</h3>
        <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Title</label>
      <input type="text" value={title} className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label for="description" className="form-label">Todo Description</label>
      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
    </div>
    <button classNameName="btn btn-success">Add todo </button>
  </form>
  </div>
  )
}
