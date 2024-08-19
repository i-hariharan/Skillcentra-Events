import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import img from "../../assets/images/Workshopimg4.jpg"
import imgg from "../../assets/images/Workshopimg5.jpg"
import imggg from "../../assets/images/Workshopimg6.jpg"

export default function PastWorkshop() {

    const cards = [
        {
          img: img,
          title: `Robotics`,
          desc: `Dive deep into your field of interest with our specialized  domain training internship.`,
        },
        {
          img: imgg,
          title: `Mern Stack Development`,
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
    <div className="flex flex-col w-full h-full mx-auto">
        {/* past Bootcamp*/}
        <div className="flex flex-col w-full h-full mx-auto p-5 mt-1 bg-bgcolor rounded-lg shadow-xl">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center sm:text-base">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-Darkblue">
                Past Workshop
              </h2> 
              <div
                className="flex flex-row justify-center items-center lg:space-x-[100px] p-5 w-full h-full transition-transform duration-500">
                {getVisibleCards().map((card, index) => (
                  <div
                    key={index}
                    className="flex justify-evenly lg:space-x-10 rounded-lg"  
                  >
                    <div className="flex flex-col w-[300px] h-full justify-between bg-Darkblue pt-5 pb-5 max-md:items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl rounded-lg">
                      <img
                        src={card.img}
                        alt=""
                        className="justify-center items-center w-full h-[150px] object-cover"
                      />
                      <div className="mt-5 flex flex-col flex-grow">
                        <h1 className="text-xl font-bold mb-2 text-Yellow font-TimesNewRoman">
                          {card.title}
                        </h1>
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h1 className="text-lg mb-2 text-White font-TimesNewRoman text-justify">
                          {card.desc}
                        </h1>
                      </div>
                      <div className="flex flex-row justify-between max-md:space-x-[150px] lg:pr-3">
                        <span className="flex justify-start font-bold text-White font-TimesNewRoman p-1 lg:pl-3">2 days</span>
                        <Link to='/Events/Workshop/Overview'>
                          <span className="underline flex text-md justify-end text-Yellow p-1 cursor-pointer rounded-lg">See Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
