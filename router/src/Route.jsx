import { BrowserRouter,Routes,Route,Link, useNavigate, redirect } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Link to="/">neet</Link>|
      <Link to="/neet/online-coaching">11</Link>|
      <Link to="/neet/online-coaching-12">12</Link>
      
      <Routes>
        <Route path="/neet/online-coaching" element={<Class11/>} />
        <Route path="/neet/online-coaching-12" element={<Class12/>} />
        <Route path="/" element={<Landing/>} />
         <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
function Landing(){
  return(
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam sed magni enim sit, asperiores laborum accusamus similique soluta commodi voluptates nihil ipsum sequi beatae iusto voluptatibus odio, at laudantium.
    </div>
  )
}

function Class12(){
  const navigate=useNavigate();
  function redirect(){
    navigate("/");
  }
  return<div>
    neet program 12
    <button onClick={redirect}></button>
  </div>
}

function Class11(){
  return<div>
    neet program
  </div>
}

function ErrorPage(){
  return<div>
    page not found
  </div>
}


export default App
