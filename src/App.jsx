import Navbar from "./comoponets/Navbar";
import Form from "./comoponets/Form";
import ListGroup from "./comoponets/ListGroup";
import { useState } from "react";


const App = () => {
  const[theme,setTheme] = useState(false);
 
  const Changetheme=()=>{
   if (theme){
   setTheme (false);
   }
   else{
    setTheme (true);
   }
  }

 const [todos,setTodos] = useState([
  // {
  //   id: 1,
  //   text: "Task One",
  // },
  // {
  //   id: 2,
  //   text: "Task Two",
  // },
  // {
  //   id: 3,
  //   text: "Task Three",
  // },

 ])
 const [edit,setEdit]=useState({
  editMeAaneWalaTodo: {},
   editmode: false,

});
const Cleartodo=()=>{
  setTodos([])

}
 const deleteTodo=(id)=>{
    // setTodos(todos.filter((item) => item.id !== id));
    setTodos (todos.filter((item)=>{
      if(item.id !== id){
        return true;
      }
    }))


 }
const addTodo=(text)=>{
  const newTodo ={
    id:crypto.randomUUID(),
    text: text,
  };
 setTodos ([newTodo,...todos]);
}
 
 const editTodo=(oldTodo)=>{
  setEdit({
    editMeAaneWalaTodo:oldTodo,
    editmode :true,
  });
 }
 const updateTodo = (oldId, newText) => {
  setTodos(
    todos.map((item) => {
      if (item.id === oldId) {
        return {
          id: oldId,
          text: newText,
        };
      } else {
        return item;
      }
    })
  );

  setEdit({
    editMeAaneWalaTodo: {},
    editmode: false,
  });
};

   
  
  
 
  return (
  <>
  < Navbar Changetheme={Changetheme}/>
  <div className="container p-5 mt-5 "  >
  < Form addTodo={addTodo} edit={edit} updateTodo={updateTodo}  Cleartodo={Cleartodo}/>
  < ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
  
  </div>

   
  </>
  )
}

export default App
