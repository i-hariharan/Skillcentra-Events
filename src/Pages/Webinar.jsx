import React, {useState} from "react";
import PastWebinar from "../SubPages/PastWebinar";
import img from "../../public/Overviewimg.jpg";

export default function Webinar() {

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handle = () => {
    setShowForm(false);
  };

  const cards = [
    {
      title: `Robotics`,
      desc: `Master HTML 5 and CSS to create and responsive and visually appealing web pages from the scratch.`,
    },
    {
      title: `Mern`,
      desc: `Master HTML 5 and CSS to create and responsive and visually appealing web pages from the scratch.`,
    },
    {
      title: `UI & UX`,
      desc: `Master HTML 5 and CSS to create and responsive and visually appealing web pages from the scratch.`,
    },
  ];

  return (
    <section className="flex flex-col w-full h-full max-md:space-y-5 place-items-center max-md:pb-16">
      <div className="relative flex justify-center items-center h-[250px] w-full md:w-full md:h-[600px] rounded-lg lg:mb-5 bg-Webinarimg bg-cover bg-center">
        <div className="absolute mt-[40px] w-full h-full text-white md:mt-[250px] max-md:pt-[70px] lg:py-10 px-6 md:px-12 w-[50%] md:block">
          <h2 className="flex justify-center items-center lg:mt-[40px] text-4xl md:text-6xl font-extrabold pb-10 text-White font-TimesNewRoman">
            Webinar
          </h2>
          <button className="flex justify-center items-center text-lg font-TimesNewRoman font-bold p-3 bg-Yellow text-Darkblue mx-auto rounded-lg"
            onClick={handleClick}
          >
            Claim your spot
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-Darkblue w-full h-full mx-auto pb-5">
        <h1 className="flex justify-center items-center lg:text-4xl max-md:text-3xl text-Yellow font-TimesNewRoman font-bold lg:mt-10 lg:mb-5 max-md:mt-5">
          What You Will learn
        </h1>
        <h3 className="flex justify-center items-center lg:text-xl text-White font-TimesNewRoman font-bold mt-5 max-md:mb-5 lg:mb-10">
          Topics That will be covered in this Bootcamp
        </h3>
        <div className="flex lg:flex-row max-md:flex-col lg:justify-between max-md:justify-center max-md:items-center">
          <div className="flex flex-col lg:pl-10 lg:justify-start lg:w-[700px] max-md:w-full max-md:p-3 max-md:justify-center max-md:items-center">
            <img
              src={img}
              alt=""
              className="w-full lg:h-[500px] max-md:h-[200px] max-md:p-5 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-end h-full lg:w-[600px] max-md:w-full max-md:p-5">
            <div className="flex flex-col justify-center items-center w-full h-full">
              {cards.map((cards, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center p-5 rounded-lg"
                >
                  <h1 className="flex justify-center items-center text-2xl font-TimesNewRoman font-bold pb-5 text-Yellow">
                    {cards.title}
                  </h1>
                  <span className="flex justify-center items-center text-lg font-TimesNewRoman font-bold text-White">
                    {cards.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PastWebinar /> 

      {/* RegisterForm */}

      <div
        className={` inset-0 bg-cover bg-transparent bg-gray-800/50 bg-center ${
          showForm ? "fixed" : ""
        }`}
      >
        {showForm && (
          <div>
            <div className="flex justify-center align-middle mx-3 md:-m-0 items-center min-h-screen ">
              <div className="bg-white p-6 md:p-8 rounded-2xl   w-full max-w-md border border-2 border-[#F5CF6B]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-center">
                    Register Now!
                  </h2>
                  <button onClick={handle} className="text-gray-500">
                    ✕
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email ID"
                      className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2BE] "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      className="mt-1 block w-full  p-2  placeholder-black  rounded-md bg-[#FAF2BE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="+91"
                      className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2BE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Share Your Interest<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="placeholder-black mt-1 block w-full p-2 bg-[#FAF2BE] rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#F5CF6B] text-Darkblue font-bold p-2 rounded-md mt-4"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
