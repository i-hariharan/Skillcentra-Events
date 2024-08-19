import React, {useEffect, useState} from "react";
import img from "../../assets/images/Liveclassimg1.jpg"
import imgg from "../../assets/images/Liveclassimg2.jpg"
import imggg from "../../assets/images/Liveclassimg3.jpg"
import Recordedclass from "../SubPages/Recordedclass"

export default function Liveclass() {

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handle = () => {
    setShowForm(false);
  };

  const RegisterForm = () => {
    // State for form fields
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [interest, setInterest] = useState('');
    const [showForm, setShowForm] = useState(true);
  
    // Handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = {
        email,
        name,
        phone,
        interest,
      };

      console.log('Form data:', formData);

    }}

      const handleClose = () => {
        setShowForm(false);
      };
    

  const cards = [
    {
      img: img,
      title: `Full Stack Development`,
      desc: `Dive deep into your field of interest with our specialized  domain training internship.`,
    },
    {
      img: imgg,
      title: `Machine Learning`,
      desc: `Dive deep into your field of interest with our specialized Domain training internship.`,
    },
    {
      img: imggg,
      title: `UI & UX`,
      desc: `Dive deep into your field of interest with our specialized domain training internship.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const nextSlide = () => {
    const slidesToShow = windowWidth >= 768 ? 3 : 1; // 3 cards for desktop, 1 card for mobile
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % cards.length);
  };

  const prevSlide = () => {
    const slidesToShow = windowWidth >= 768 ? 3 : 1; // 3 cards for desktop, 1 card for mobile
    setCurrentIndex(
      (prevIndex) => (prevIndex - slidesToShow + cards.length) % cards.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    const visibleCards = [];
    const slidesToShow = windowWidth >= 768 ? 3 : 1; // 3 cards for desktop, 1 card for mobile
    for (let i = 0; i < slidesToShow; i++) {
      visibleCards.push(cards[(currentIndex + i) % cards.length]);
    }
    return visibleCards;
  };

  return (
    <section className="flex flex-col w-full h-full max-md:space-y-5 place-items-center max-md:pb-16">
      <div className="relative flex justify-center items-center h-[250px] w-full md:w-full md:h-[600px] rounded-lg lg:mb-5 bg-Liveclassimg bg-cover bg-center">
        <div
          className="absolute mt-[40px] w-full h-full text-white md:mt-[250px] max-md:pt-[70px] lg:py-10 px-6 md:px-12 w-[50%] md:block">
          <h2 className="flex justify-center items-center lg:mt-[40px] text-4xl md:text-6xl font-extrabold pb-10 text-White font-TimesNewRoman">
            Innovative Live Classes
          </h2>
        </div>
      </div>

      <div className="flex flex-col w-full h-full mx-auto space-y-5">
        {/* upcoming Bootcamp*/}
        <div className="flex flex-col w-full h-full mx-auto p-5 mt-1 bg-Darkblue rounded-lg shadow-xl">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center sm:text-base">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-Yellow">
                Upcoming Live Classes
              </h2>
              <h2 className="mt-5 mb-5 text-2xl font-extrabold tracking-tight text-White">
                Our Top Courses
              </h2>
              <p className="flex justify-center items-center mb-5 text-center w-full mx-auto font-bold font-TimesNewRoman text-lg text-White text-justify max-md:hidden lg:mt-5">
                Discover our top courses and elevate your skills to the next level.
              </p>
              <div
                className="flex flex-row justify-center items-center lg:space-x-[100px] bg-Darkblue p-5 w-full h-full transition-transform duration-500">
                {getVisibleCards().map((card, index) => (
                  <div
                    key={index}
                    className="flex justify-evenly lg:space-x-10 rounded-lg"  
                  >
                    <div className="flex flex-col w-[300px] h-full justify-between bg-White hover:bg-Yellow pt-5 pb-5 max-md:items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl rounded-lg">
                      <img
                        src={card.img}
                        alt=""
                        className="justify-center items-center w-full h-[150px] object-cover"
                      />
                      <div className="mt-5 flex flex-col flex-grow">
                        <h1 className="text-xl font-bold mb-2 text-Darkblue font-TimesNewRoman">
                          {card.title}
                        </h1>
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h1 className="text-lg mb-2 text-Darkblue font-TimesNewRoman text-justify">
                          {card.desc}
                        </h1>
                      </div>
                      <div className="flex flex-row justify-between max-md:space-x-[150px] lg:pr-3">
                        <span className="flex justify-start font-bold font-TimesNewRoman p-1 lg:pl-3">2 days</span>
                        <button className="flex justify-end bg-Darkblue text-Yellow p-1 rounded-lg"
                          onClick={handleClick}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**past Bootcamp */}
      <Recordedclass />

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
                  <button onClick={handleClose} className="text-gray-500">
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
                      onClick={(e) => setEmail(e.target.value)}
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
                      onClick={(e) => setName(e.target.value)}
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
                      onClick={(e) => setPhone(e.target.value)}
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
                      onClick={(e) => setInterest(e.target.value)}
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
