import {  useRef, useState } from "react";
import { Button } from "./Button";

function Otp() {
  const[disabled,setDisabled]=useState(true);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);


  return (
    <div className="flex justify-center">
 
     <SubOtpBox
        reference={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
        onBack={()=>{
           ref1.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
         onBack={()=>{
           ref2.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref4}
        onDone={() => {
          ref5.current.focus();
        }} onBack={()=>{
           ref3.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref5}
        onDone={() => {
          ref6.current.focus();
        }} onBack={()=>{
           ref4.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref6}
        onDone={() => {
          ref6.current;
          setDisabled(false)

        }} onBack={()=>{
           ref5.current.focus();
        }}
      />

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

export default Otp;