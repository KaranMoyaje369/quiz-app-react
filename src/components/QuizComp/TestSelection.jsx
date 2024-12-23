import React from "react";
import { useState } from "react";
import { Questions } from "../../data/Questions";
import QuizNavigator from "./QuizNavigator";

const TestSelection = () => {
  const [categoryName, setCategoryName] = useState(null);
  const [questions, setQuestionsIndex] = useState(null);

  const handleCategoryBtn = (category) => {
    setCategoryName(category);
  };
  const categories = Object.keys(Questions);
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-10">
        {categories.map((category, index) => (
          <button
            className="border-[1px] border-orange-400 p-3 rounded-lg hover:bg-orange-400 hover:text-white uppercase text-[20px] font-bold tracking-wide"
            key={index}
            onClick={() => handleCategoryBtn(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {categoryName && (
        <>
          <div>
            <QuizNavigator
              categoryName={categoryName}
              question={questions}
            ></QuizNavigator>
          </div>
        </>
      )}
    </>
  );
};

export default TestSelection;
