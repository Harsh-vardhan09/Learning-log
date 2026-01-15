import { useRef, useState } from "react";
import { Button } from "./Button";

export default function Otp3({numbers}) {
    const [disabled,setDisabled]=useState(true);
    const ref=useRef(Array(numbers).fill(0));

     return (
        <div className="flex justify-center">
            {Array(numbers).fill(1).map((x,index)=><SubOtpBox
                key={index}
                reference={(e)=>ref.current[index]=e}
                    onDone={() => {
                         console.log(index);
                    if(index+1>=numbers){
                       return
                    }
                     ref.current[index+1].focus();
                    }}
                    onBack={()=>{ 
                      ref.current[index-1].focus();
                    }}
                   
                />
            )}
            <Button disabled={disabled}>signup</Button>
        </div>
      );
}

function SubOtpBox({ reference, onDone,onBack }) {
  const[inputVal,setInputVal]=useState("");


  return (
    <div>
      <input
        ref={reference}
        onKeyUp={(e)=>{
          if(e.key=="Backspace"){
            onBack()
          }
        }}
        onChange={(e) => {
          const val=e.target.value;
          if(val=="1"||val=="2"||val=="3"||val=="4"||val=="5"||val=="6"||val=="7"||val=="8"||val=="9"){
            setInputVal(val);
            onDone();
          }else{

          }
        }}
        type="text"
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none text-white px-4"
      />

      
    </div>
  );
}
