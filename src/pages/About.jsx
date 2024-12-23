import React from "react";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-auto flex flex-col justify-center items-center p-10 tracking-wider mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 text-center">
            About QuizMaster
          </h2>
          <div className="my-6 text-center p-10 text-lg md:text-2xl bg-[#1F2937] text-white rounded-2xl flex flex-col gap-2 shadow-lg shadow-orange-500">
            <p>
              Welcome to{" "}
              <span className="text-orange-500 font-bold">QuizMaster</span>, the{" "}
              <span className="text-orange-500 font-bold">
                Ultimate Destination
              </span>{" "}
              for fun, knowledge, and friendly{" "}
              <span className="text-orange-500 font-bold">Competition!</span>
            </p>
            <p>
              <span className="text-orange-500 font-bold">Our App</span>, the is
              designed to challenge your mind, expand your knowledge, and keep
              you entertained with a wide variety of quiz topics.
            </p>
            <p>
              Whether you're a trivia enthusiast, a student preparing for exams,
              or just looking to pass the time,{" "}
              <span className="text-orange-500 font-bold">
                QuizMaster has Something For Everyone!!
              </span>
            </p>
          </div>
        </div>

        <div className="h-auto flex flex-col gap-4 p-10 tracking-wider mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 text-center mb-4">
            Why Choose QuizMaster ?
          </h2>
          <div className="text-lg md:text-2xl">
            <h4 className="font-bold text-orange-500">Diverse Categories:</h4>
            <p>
              Explore quizzes on topics ranging from history, science, and
              technology to pop culture, sports, and entertainment.
            </p>
          </div>
          <div className="text-lg md:text-2xl">
            <h4 className="font-bold text-orange-500">Interactive Gameplay:</h4>
            <p>
              Compete with friends or challenge yourself to beat your own high
              score.
            </p>
          </div>
          <div className="text-lg md:text-2xl">
            <h4 className="font-bold text-orange-500">Learn While Playing:</h4>
            <p>
              Discover fascinating facts and expand your knowledge with detailed
              explanations after each question.
            </p>
          </div>
          <div className="text-lg md:text-2xl">
            <h4 className="font-bold text-orange-500">Customizable Quizzes:</h4>
            <p>Create your own quizzes and share them with friends!</p>
          </div>
          <div className="text-lg md:text-2xl">
            <h4 className="font-bold text-orange-500">
              Real-time Leaderboards:
            </h4>
            <p>
              Stay motivated by climbing the ranks and earning rewards for your
              performance.
            </p>
          </div>
        </div>

        <div className="h-auto flex flex-col justify-center items-center p-10 tracking-wider mt-10 ">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 text-center">
            Our Mission
          </h2>
          <div className="my-6 text-center p-10 text-lg md:text-2xl bg-[#1F2937] text-white rounded-2xl flex flex-col gap-2 shadow-lg shadow-orange-500">
            <p>
              At <span className="text-orange-500 font-bold">QuizMaster</span>,
              we believe learning should be fun and engaging.
            </p>
            <p>
              <span className="text-orange-500 font-bold">Our Goal</span>, is to
              make knowledge accessible and enjoyable for people of all ages.
            </p>
            <p>
              <span className="text-orange-500 font-bold">
                Join Our Community of Quiz Lovers Today and let the Games Begin!
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section Start */}
      <footer className=" bg-gray-800 text-white py-10">
        <Footer />
      </footer>

      {/* Footer Section End */}
    </>
  );
};

export default About;
