import React from 'react'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Listitem = ({todo,deleteTodo,editTodo} ) => {
  return (
    <li className="list-group-item rounded-0 bg-dark "  >
       <h1 className='text-warning'>{todo.text}</h1>
       <p className='text-warning' > {todo.id}</p>
      <span className="float-end">
        <button className="btn btn-warning rounded-0 " onClick={()=>editTodo(todo)}>Edit <CiEdit/> </button>
        <button className="btn btn-danger rounded-0 text-light m-2" onClick={() => deleteTodo(todo.id)}>Delete <MdDelete/> </button>
      </span>
    </li>
  )
}

export default Listitem;

