
import { PostComponent } from './Post'
import './App.css'
import { useState } from 'react';
import Counter from './Counter';
import Card from './Card';
import { Card1, Card2,ErrorBoundary} from './Error';



function App() {
  // const [post,setPost]=useState([]);

  // const PostComponents=post.map(post => <PostComponent
  //                 name={post.name}
  //                 subtitle={post.subtitle}
  //                 time={post.time}
  //                 discription={post.discription}
  //                 image={post.image}
  //               />);

  // function addPost(){
  //   setPost([...post,{ 
  //                 name:"harsh",
  //                 subtitle:"23 follower",
  //                 time:"3 min",
  //                 discription:"moving world",
  //                 image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
  //               }])
  // }

  return (<div style={{ display: "flex" }}>

    <ErrorBoundary>
      <Card1/>
    </ErrorBoundary>

    <Card2/>

    {/* <Card >
      <div style={{ color: "green" }}>
        what do you you want <br /> <br />
        <input type="text" />
      </div>
    </Card>
    <Card>
      <div>
        hi there
      </div>
    </Card> */}
  </div>


    // <div style={{background:"#dfe6e9",height:"100vh"}}>
    //   <button onClick={addPost}>add post</button>

    //   <div style={{display:"flex",justifyContent:"center"}}>
    //      <div>
    //         <div>
    //           {PostComponents}
    //         </div>

    //       </div>
    // </div>
    // </div>
  )
}

// class ErrorBoundary extends React.Component(){
    
//     constructor(props){
//         super(props);
//         this.state={hasError:false};
//     }

//     static getDerivedStateFromError(error){
//         return{hasError:true};
//     }

//     componentDidCatch(error,info){
//         console.error("error caught",error,info);
        
//     }
//     render(){
//         if(this.state.hasError){
//             return<h1>something went wrong</h1>
//         }

//         return this.props.children;
//     }

// }


export default App

