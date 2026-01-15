import React, { useRef } from "react";

const OTPagain = () => {

  const ref = useRef(1);
  const array = [1, 2, 3, 4, 5];
  let size = 5;
  
  return (
    <div className="flex flex-row justify-center">
      {array.map((item, index) => {
        return (
          <div key={index}>
            <Subotp
              reference={ref}
              ondone={() => {
                ref.current = (ref.current);
                ref.current.focus();
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
function Subotp({ reference, ondone }) {
  return (
    <div>
      <h1>kjskj</h1>
      <input
        type="text"
        ref={reference}
        onChange={(e) => {
          ondone();
        }}
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none text-white px-4"
      />
    </div>
  );
}
export default OTPagain;
