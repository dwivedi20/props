import { useEffect, useState } from "react";


const Form = ({addTodo, edit,updateTodo,Cleartodo}) => {

  const[text,setText] =useState("");

 const handleSubmit =(e) => {
  e.preventDefault();
  if (edit.editmode) {


    updateTodo(edit.editMeAaneWalaTodo.id,text)

  }
   else {
    addTodo(text);
  }
 
  setText("")
 }


 useEffect(() => {
  setText(edit.editMeAaneWalaTodo.text);
}, [edit]);

  return (
   <>
    <form className="bg-light my-3 p-3"  onSubmit={(e)=> handleSubmit(e)}>
    <input type="text " 
          placeholder="Enter Text"
          className="from-control rounded-0 w-100 p-4" value={text} onChange={(e)=>setText(e.target.value)}/>
          
          <button className="btn btn-success rounded-0 w-100 my-3"> Save</button>
    </form>
          <button className="btn btn-danger rounded-0 w-100" onClick={()=>Cleartodo()}> Clear All</button>
   
   </>
  )
}

export default Form
