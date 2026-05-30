

const TextInput = ({placeholder}:{placeholder:string}) => {
    return (
        <input  placeholder={placeholder} style={{
            padding:10.,
            margin:10,
            borderColor:"black",
            borderWidth:1,
        }}>
             
        </input>
    )
}

export default TextInput