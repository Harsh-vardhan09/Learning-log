import axios from "axios";

export default async function blogs (){
     
    const getBlogs=async()=>{
        const res=await axios.get('https://jsonplaceholder.typicode.com/todos')
        return res.data
     }

    const blogs=await getBlogs()
  return (
    <div>
        {/* this is best redux learning page */}
        {blogs.map((todo:ITodo,i:number)=>(
                <Todo key={i} title={todo.title} completed={todo.completed}/>
        ))}
    </div>
  );
};

interface ITodo{
    title:string,
    completed:boolean
}

function Todo({title,completed}:ITodo){
    return <div>
        {title}{completed?"done":"not done"}
    </div>
}
