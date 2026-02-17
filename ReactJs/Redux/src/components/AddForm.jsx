import  {useState} from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task,setTask]=useState("");
    const dispatch=useDispatch();

    const submitHandler=(e)=>{
        e.preventDefault(task);
        console.log(task)
        dispatch(addTodo(task));
        setTask("");
    }
    return(
        <>
            <form action="" onSubmit={submitHandler}>
                <input type="text" onChange={(e)=>setTask(e.target.value)}/>
                <button>Add task</button>
            </form>
        </>
    )
}