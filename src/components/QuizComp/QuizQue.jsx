import React, { useState } from "react";
import Btn from "./Btn";

const QuizQue = ({
  question,
  options,
  onOptionSelect,
  answer,
  categoryName,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [scoreTracker, setScoreTracker] = useState({}); // Tracks each question's correctness
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);

    // Update score tracker for the current question
    setScoreTracker((prevTracker) => ({
      ...prevTracker,
      [currentQuestionIndex]: option === answer ? "correct" : "wrong",
    }));
  };

  const calculateScores = () => {
    const correct = Object.values(scoreTracker).filter(
      (status) => status === "correct"
    ).length;
    const wrong = Object.values(scoreTracker).filter(
      (status) => status === "wrong"
    ).length;
    setCorrectScore(correct);
    setWrongScore(wrong);
    return { correct, wrong }; // Return the scores
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <span className="border-[1px] border-orange-400 px-4 py-2 mb-4 font-bold bg-orange-500 text-white rounded-full">
          {currentQuestionIndex + 1} <span>out of 10</span>
        </span>
      </div>
      <div className="container mx-auto p-10 border-2 border-orange-400">
        <h2 className="text-[20px] font-bold mb-2">{question}</h2>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <div
                className={`border-[1px] border-orange-400 p-2 mb-2 rounded-lg cursor-pointer hover:bg-orange-400 hover:text-white ${
                  selectedOption === option ? "bg-orange-400 text-white" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center mt-4">
        {correctScore > 0 && (
          <span className="font-bold text-green-500 mr-4">
            Correct Answers: {correctScore}
          </span>
        )}
        {wrongScore > 0 && (
          <span className="font-bold text-red-500">
            Wrong Answers: {wrongScore}
          </span>
        )}
      </div>

      <div>
        <Btn
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          categoryName={categoryName}
          onCalculateScores={calculateScores}
        />
      </div>
    </>
  );
};

export default QuizQue;
