let ToggleButton=()=>{
  const [isVisible,SetIsVisible]=useState(false);
  return(
    <div>
      <button onClick={()=>{SetIsVisible(!isVisible)}}>
        toggle
      </button>
      {isVisible && <p>conditional rendering</p>}
    </div>
  )
}

export default ToggleButton;