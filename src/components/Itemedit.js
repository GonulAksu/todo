import { useState } from "react";
const ItemEdit = ({todos,id,text,setTodos}) => {
    
   

    const [editText , setEditText ] = useState(text)
    const updateTodo = (e) => {
        e.preventDefault();
       const editTodos=  todos.map((perEditableTodo) => perEditableTodo.id === id ? {...perEditableTodo,text:editText,isEditable:false} : perEditableTodo)
       setTodos(editTodos)
    }
  return (
    <form onSubmit={updateTodo}>
        <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
    </form>
  )
}
export default ItemEdit