import { useState,useEffect } from "react";

export  function usePost(){
    
    const [post,setPost]=useState({});

  async function  getPost(){
      const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data= await response.json();
      setPost(data)
  }

  useEffect(()=>{
    getPost();
  },[])
  
  return post
}

export  function useFetch(url){
  const[finalData,setFinalData]=useState({});
  const [loading,setLoading]=useState(true)

  async function getDetails() {
    setLoading(true);
    const response=await fetch(url);
    const data=await response.json();
    setFinalData(data);
    setLoading(false)
  }

  useEffect(()=>{
    getDetails();
  },[url])

  return{
    finalData,
    loading
  }
}