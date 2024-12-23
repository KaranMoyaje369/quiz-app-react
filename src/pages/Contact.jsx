import React from "react";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className=" h-auto flex flex-col justify-center items-center p-10 tracking-wider mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 text-center">
            Contact Us
          </h2>
          <div className="my-6 text-center p-10 text-lg md:text-2xl bg-[#1F2937] text-white rounded-2xl flex flex-col gap-2 shadow-lg shadow-orange-500">
            <div className="text-center flex flex-col px-5 py-10 gap-2">
              <p>
                We’d <span className="text-orange-500 font-bold">Love</span> to
                hear from{" "}
                <span className="text-orange-500 font-bold">You!</span>
              </p>
              <p>
                Whether you have{" "}
                <span className="text-orange-500 font-bold">
                  Questions, Feedback,
                </span>
                {""}
                or just want to{" "}
                <span className="text-orange-500 font-bold">Say Hello</span> 😊,
              </p>
              <p>feel free to reach out to us.</p>
              <p>
                <span className="text-orange-500 font-bold">
                  Your input helps us improve and provide you with the best
                  experience possible.
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center px-5 py-10 gap-2">
              <p className="text-lg md:text-3xl font-bold text-orange-500 text-center">
                Get in Touch with Us:
              </p>
              <p>
                <span className="text-orange-500 font-bold">Email :</span>
                {"  "}
                support@quizmaster.com
              </p>
              <p>
                <span className="text-orange-500 font-bold">Phone :</span>
                {"  "}
                +12345 67890
              </p>
              <p>
                <span className="text-orange-500 font-bold">Address :</span>
                {"  "}
                123 Knowledge Lane, Trivia City, World
              </p>
            </div>

            <div className="flex flex-col items-center px-5 py-10 gap-2">
              <p className="text-lg md:text-3xl font-bold text-orange-500 text-center">
                Follow Us on Social Media:
              </p>
              <p>
                Stay updated with the latest features, news, and quiz challenges
                by following us on:
              </p>
              <p>
                <span className="text-orange-500 font-bold">Facebook :</span>
                {"  "}
                facebook.com/quizmasterapp
              </p>
              <p>
                <span className="text-orange-500 font-bold">Twitter :</span>
                {"  "}
                @quizmasterapp
              </p>
              <p>
                <span className="text-orange-500 font-bold">Instagram :</span>
                {"  "}
                @quizmasterapp
              </p>
            </div>

            <div className="flex flex-col items-center px-5 py-10 gap-2">
              <p className="text-lg md:text-3xl font-bold text-orange-500 text-center">
                Feedback and Suggestions :
              </p>
              <p>
                We’re always striving to improve! If you have ideas or
                suggestions, please don’t hesitate to share them with us.
              </p>
              <p>Let’s connect and make QuizMaster even better, together!</p>
            </div>
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

export default Contact;
