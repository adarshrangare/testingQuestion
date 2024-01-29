import React, { useState } from "react";
import Questions from "./QuestinNumber/Questions";

const QuestionContainer = ({ questions,handleClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="sidebar w-full h-full bg-red-200 flex flex-col">
      <ul className="list-none">
        {questions.map((ques, index) => (
          <Questions key={ques.id} ques={ques} number={index+1} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default QuestionContainer;
