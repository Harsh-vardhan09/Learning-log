
export function PostComponent({name,subtitle,time,image,discription}){
  return (
    <div style={{width:200,backgroundColor:"white",borderRadius:10,borderColor:"grey",borderWidth:1,padding:20}}>
        <div style={{display:"flex"}}>
        <img src={image} alt="" style={{width:40,height:40,borderRadius:20}} />
        <div style={{fontSize:10,marginLeft:10}}>
            <b>{name} </b>
            <div>{subtitle}</div>
            <div>{time}</div>
        </div>
        </div>
        <div style={{fontSize:15}}>{discription}</div>

    </div>
  )
}
