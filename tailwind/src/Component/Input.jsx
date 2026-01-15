export const Input=({
    placeholder,
    onClick,
    type})=>{
    return(
        <span onClick={onClick} className={` rounded-2xl text-white  px-32 text-4xl cursor-point {disabled ? "bg-blue-200":"bg-green-400"}`}>
            <input type={type} placeholder={placeholder} className=" bg-blue-500 rounded-2xl text-white  px-2  py-2  outline-none"/>
        </span>
    )
}