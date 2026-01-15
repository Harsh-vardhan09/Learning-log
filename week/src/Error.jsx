
import React from "react";

export function Card1(){
    throw new Error("error");
    
    
     return (
     <div style={{backgroundColor:"red",padding:10,margin:10}}>
        hello there
    </div>)
}

export function Card2(){
    return (
    <div style={{backgroundColor:"red",padding:10,margin:10}}>
        hello there
    </div>
    )
}

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
