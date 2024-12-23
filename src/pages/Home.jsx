import React from "react";
import heroImage from "../assets/hero-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faChartLine,
  faThLarge,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "../components/HomePage/FeatureCard";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* Hero Content Start*/}
      <section className="container-fluid mx-auto flex flex-col justify-center items-center gap-8 p-10 tracking-wide">
        <div className="flex flex-col justify-center items-center gap-10 py-10 md:p-20">
          <div>
            <h1 className="text-orange-400 text-3xl md:text-4xl font-extrabold">
              Welcome to QuizAPP The Ultimate Quiz Experience!
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-[20px] md:text-2xl font-semibold">
            <h3>
              Challenge your mind, learn something new, and have fun with our
              interactive quizzes.
            </h3>
            <h3>
              Whether you're a trivia master or just getting started, there's
              something for everyone!
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:my-10">
            <NavLink
              to="/quizzes"
              className="bg-orange-500 p-3 rounded-full font-bold"
            >
              Start Quiz Now
            </NavLink>
            <NavLink
              to="/contact"
              className="border-2 border-orange-400 px-6 py-3 rounded-full font-bold"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:px-10 pb-10">
          <img
            src={heroImage}
            alt=""
            className="img-fluid h-[200px] md:h-[600px] w-[1200px] rounded-2xl shadow-lg shadow-orange-500"
          />
        </div>
      </section>
      {/* Hero Content End*/}

      {/* Feature Section Start*/}
      <section className="container-fluid mx-auto flex flex-col justify-center items-center gap-8 p-10 tracking-wide">
        <div className="py-16">
          <div className="container mx-auto text-center">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-orange-500 mb-8">
              Why Choose QuizApp?
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={faBrain}
                title="Interactive Quizzes"
                description="Engage with dynamic and fun quizzes across multiple categories."
              />
              <FeatureCard
                icon={faChartLine}
                title="Personalized Insights"
                description="Get detailed performance analysis to track your growth."
              />
              <FeatureCard
                icon={faThLarge}
                title="Diverse Categories"
                description="Explore quizzes from a wide range of topics, from tech to entertainment."
              />
              <FeatureCard
                icon={faMobileAlt}
                title="User-Friendly Design"
                description="Enjoy a seamless experience on any device, anywhere."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section End*/}

      {/* Footer Section Start */}
      <footer className=" bg-gray-800 text-white py-10">
        <Footer />
      </footer>

      {/* Footer Section End */}
    </>
  );
};

export default Home;
