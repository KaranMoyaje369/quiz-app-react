import React from "react";
import { Questions } from "../../data/Questions";
import { NavLink } from "react-router-dom";

const Btn = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  selectedOption,
  setSelectedOption,
  categoryName,
  onCalculateScores,
}) => {
  const handlePrevBtn = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleNextBtn = () => {
    if (currentQuestionIndex < Questions[categoryName].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    const scores = onCalculateScores();
    if (scores) {
      const { correct, wrong } = scores;
      //   console.log("Correct Answers: ", correct);
      //   console.log("Wrong Answers: ", wrong);
      alert(`Your Final Result Is Here....🏆🏆🏆\n
             Total Questions: ${Questions[categoryName].length} \n
             Correct Answers: ${correct} \n
             Wrong Answers: ${wrong}\n
             😊
             `);
    } else {
      console.error("Error: calculateScores returned undefined!");
    }
  };

  return (
    <>
      <div className="flex justify-around items-center mt-4">
        <button
          className={`border-[1px] border-orange-400 p-3 px-10 rounded-lg hover:bg-orange-400 hover:text-white ${
            currentQuestionIndex === 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handlePrevBtn}
          disabled={currentQuestionIndex === 0}
        >
          Prev
        </button>
        <button
          className={`border-[1px] border-orange-400 p-3 px-10 rounded-lg hover:bg-orange-400 hover:text-white ${
            selectedOption === null ||
            currentQuestionIndex === Questions[categoryName].length - 1
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleNextBtn}
          disabled={
            selectedOption === null ||
            currentQuestionIndex === Questions[categoryName].length - 1
          }
          hidden={currentQuestionIndex + 1 === Questions[categoryName].length}
        >
          Next
        </button>
      </div>

      <div className="flex justify-around items-center mt-4">
        {currentQuestionIndex === Questions[categoryName].length - 1 && (
          <button
            className={`border-[1px] border-orange-400 p-3 px-10 rounded-lg hover:bg-orange-400 hover:text-white cursor-pointer`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      <div className="flex justify-around items-center mt-4">
        <NavLink to="/">
          <button
            className={`border-[1px] border-orange-400 p-3 px-10 rounded-lg hover:bg-orange-400 hover:text-white`}
          >
            Back to Home
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Btn;
