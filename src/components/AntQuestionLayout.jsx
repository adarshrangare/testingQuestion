import React, { useState } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { questionArray } from "../utils/Question";
import QuestionContainer from "./QuestionContainer";
import QuestionsContent from "./QuestionsContent";

const QuestionLayout = () => {
  const [question, setQuestion] = useState(questionArray[0]);

  function handleClick(id) {
    const temp = questionArray.filter((que) => que.id == id);

    console.log(temp);

    setQuestion(temp[0]);
  }

  return (
    <div className="container bg-blue-50 w-screen h-screen relative grid grid-cols-[1fr,4fr] ">
      <QuestionContainer questions={questionArray} handleClick={handleClick} />
  
      <QuestionsContent question={question} />

    </div>
  );
};
export default QuestionLayout;
