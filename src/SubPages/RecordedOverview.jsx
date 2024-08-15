import React from "react";
import img from "../../public/Overviewimg.jpg";
import Host from "../../public/Hostimg.jpg"
import imggg from "../../public/Certificate.jpg"
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export default function RecordedOverview() {
  const cards = [
    {
      title: `Marketing`,
      desc: `introduction to Digital Marketing Liveclasses cover the Essentials of SEO, Social media strategies and email marketing. Engage with industry exxperts in real-time to gain practical insightsand skills.`,
    },
  ];

  const Hostcards = [
    {
      img: Host,
      name:'Michael',
      position:'Mern Developer, Altruisty',
      desc:'Introduction to Digital Marketing Live Classes Cover the Essentials of SEO, Social media strategies and email marketing. Engage with industry experts in real-time to gain practical insightsand skills.',
    },
  
  ];

  return (
    <section>
      <div className="flex flex-col bg-Darkblue w-full h-full mx-auto max-md:pb-5 lg:pb-16">
        <h1 className="flex justify-center items-center lg:text-4xl max-md:text-3xl p-5 text-Yellow font-TimesNewRoman font-bold lg:mt-10 lg:mb-5 max-md:mt-5">
          Introduction to Digital Marketing
        </h1>
        
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
                  <span className="flex justify-center items-center text-lg font-TimesNewRoman text-justify font-bold text-White">
                    {cards.desc}
                  </span>
                  <span className="flex justify-center items-center lg:pt-16 text-lg font-TimesNewRoman font-bold text-justify text-White">
                    {cards.desc}
                  </span>
                  <span className="flex justify-center items-center lg:pt-16 text-lg font-TimesNewRoman font-bold text-justify text-White">
                    {cards.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-White w-full h-full mx-auto lg:mt-[100px] lg:mb-16 max-md:pb-16 lg:ml-16">
        <div className="flex lg:flex-row max-md:flex-col lg:justify-center lg:space-x-5 mx-auto max-md:justify-center max-md:items-center">
          <div className="flex flex-col lg:pl-10 lg:justify-start max-md:p-3 max-md:justify-center max-md:items-center">
            <img
              src={img}
              alt=""
              className="w-full lg:h-[300px] max-md:h-[200px] max-md:p-5 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:justify-start max-md:justify-center h-full lg:w-full max-md:w-full">
          <h1 className="flex justify-center items-center lg:text-xl max-md:text-xl bg-Darkblue max-md:mx-auto font-TimesNewRoman font-bold lg:p-2 lg:ml-5 max-md:p-1 lg:w-[250px] max-md:w-[200px] text-Yellow rounded-lg">About the Host</h1>
            <div className="flex flex-col justify-center items-center w-full h-full lg:w-[500px]">
              {Hostcards.map((Hostcards, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center max-md:items-center max-md:mx-auto p-5 rounded-lg"
                >
                  <span className="flex lg:justify-start max-md:justify-center max-md:items-center text-2xl font-TimesNewRoman font-bold pb-5 text-Darkblue">
                    {Hostcards.name}
                  </span>
                  <span className="flex lg:justify-start max-md:justify-center max-md:mx-auto max-md:items-center text-lg font-TimesNewRoman font-bold text-Darkblue">
                    {Hostcards.position}
                  </span>
                  <span className="flex lg:justify-start max-md:justify-center max-md:mx-auto text-justify max-md:items-center lg:pt-10 max-md:pt-5 text-lg font-TimesNewRoman font-bold text-Darkblue">
                    {Hostcards.desc}
                </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-Darkblue w-full min-h-full mx-auto pb-5 max-md:p-5">
        <div className="flex lg:flex-row max-md:flex-col lg:ml-16 lg:mr-16 lg:mt-5 lg:justify-between max-md:justify-center max-md:items-center">
          <div className="flex flex-col lg:pl-10 lg:justify-start lg:mt-16 lg:w-[700px] max-md:w-full max-md:p-3 max-md:justify-center max-md:items-center">
            <h2 className="lg:text-4xl max-md:text-xl text-Yellow font-TimesNewRoman font-bold lg:w-[600px]">Take Assignments!</h2>
            <span className="flex lg:text-xl max-md:text-lg max-md:justify-center max-md:items-center text-White font-TimesNewRoman font-bold lg:mt-16 max-md:mt-5"><FaQuestionCircle size='30'/>15 MCQ Questions</span>
            <span className="flex lg:text-xl max-md:text-lg max-md:justify-center  max-md:items-center text-White font-TimesNewRoman font-bold mt-5"><IoMdTime size='30'/>30 Mins</span>
            <button className="max-md:mt-5 lg:mt-[50px] flex justify-center items-center bg-Yellow w-[300px] text-lg  text-Darkblue font-TimesNewRoman font-bold p-3 rounded">Begin</button>
          </div>
          <div className="flex flex-col justify-end p-10 h-full">
            <img src={imggg} alt="" className="w-full h-[340px] object-cover rounded-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
}
