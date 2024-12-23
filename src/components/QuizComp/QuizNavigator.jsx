import React, { useState } from "react";
import QuizQue from "./QuizQue";
import { Questions } from "../../data/Questions";

const QuizNavigator = ({ categoryName }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="container mx-auto p-10">
      <QuizQue
        question={Questions[categoryName][currentQuestionIndex].question}
        options={Questions[categoryName][currentQuestionIndex].options}
        answer={Questions[categoryName][currentQuestionIndex].answer}
        onOptionSelect={handleOptionSelect}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        categoryName={categoryName}
      />
    </div>
  );
};

export default QuizNavigator;
