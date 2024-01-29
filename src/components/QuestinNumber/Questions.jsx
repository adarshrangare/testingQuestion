import React from "react";

const Questions = ({ ques,number,handleClick }) => {

    

  return (
    <li
      className={`bg-green-100 m-2 p-2 `}
      onClick ={()=>{
        handleClick(ques.id);
      }}
    >{`Question ${number}`}</li>
  );
};

export default Questions;
