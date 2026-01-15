export const Button=({disabled,onClick,children})=>{
    return <span onClick={onClick} className={` rounded-2xl text-white  px-32 text-4xl cursor-pointer ${disabled ? "bg-blue-200":"bg-green-400"}`}>
            {children}
    </span>
}


