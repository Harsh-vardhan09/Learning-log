import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { gql } from '@apollo/client'
import { useQuery } from "@apollo/client/react";

const query = gql`
query GetTodosWithUser{
getTodos {
id
    title
    completed
    user {
      name
    }
  }
}
`
function App() {
  const [count, setCount] = useState(0)
  const{data,loading}=useQuery(query)

  if(loading) return <h1>loading ...</h1>
  return (
    <>
    <table>
      <tbody>
        {data.getTodos.map(todo=><tr key={todo.id}>
          <td>{todo.title}</td>
           <td>{todo.user.name}</td>
        </tr>)}
      </tbody>
    </table>
    </>
  )
}

export default App
