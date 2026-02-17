import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo,markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch=useDispatch();


  const deleteHandler=(id)=>{
        console.log(id);
        dispatch(deleteTodo(id));
    }

    const markDone=(id,task)=>{
        // console.log("isdone");
        dispatch(markAsDone(id)); 
    }

    
  return (
    <>
      <AddForm />
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{textDecoration:todo.isDone?"line-through":"none"}} >
            {todo.task}
            <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
            <button onClick={()=>markDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
