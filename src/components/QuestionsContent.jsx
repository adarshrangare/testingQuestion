import React from "react";
import { useState } from "react";

const QuestionsContent = ({ question }) => {
    
    const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="content w-full h-full bg-blue-200 p-10">
      <h1>
        <span className="font-bold">{`Question ${question.id}:`}</span>{" "}
        {question.question}
      </h1>

      <label htmlFor="male">A</label>
      <input
        type="radio"
        checked={selectedOption === "A" ? true : false}
        onChange={() => {
          setSelectedOption("A");
        }}
      />
      <span> {question.A} </span>
      <br></br>
      <label htmlFor="female">B</label>
      <input
        type="radio"
        checked={selectedOption === "B" ? true : false}
        onChange={() => {
          setSelectedOption("B");
        }}
      />
      <span> {question.B} </span>
      <br></br>
      <label htmlFor="others">C</label>
      <input
        type="radio"
        checked={selectedOption === "C" ? true : false}
        onChange={() => {
          setSelectedOption("C");
        }}
      />
      <span> {question.C} </span>
      <br></br>
      <label htmlFor="others">D</label>
      <input
        type="radio"
        checked={selectedOption === "D" ? true : false}
        onChange={() => {
          setSelectedOption("D");
        }}
      />
      <span> {question.D} </span>

      <br />
    </div>
  );
};

export default QuestionsContent;
