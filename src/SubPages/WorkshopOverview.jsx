import React, {useState} from "react";
import img from "../../public/Overviewimg.jpg";
import Host from "../../public/Hostimg.jpg"
import imggg from "../../public/Certificate.jpg"

export default function WorkshopOverview() {

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
   };

   const handle =() =>{
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
              <h1 className="flex justify-center items-center p-5 text-2xl text-Yellow font-TimesNewRoman font-bold">
                Project Submission
              </h1>
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

      <div className="flex flex-col bg-Darkblue w-full h-full mx-auto pb-5 max-md:p-5">
        <div className="flex lg:flex-row max-md:flex-col lg:justify-between max-md:justify-center max-md:items-center">
          <div className="flex flex-col lg:pl-10 lg:justify-start lg:mt-16 lg:w-[700px] max-md:w-full max-md:p-3 max-md:justify-center max-md:items-center">
            <h2 className="lg:text-4xl max-md:text-xl text-White font-TimesNewRoman font-bold lg:w-[600px]">Submit your Project and get certified</h2>
            <button className="max-md:mt-5 lg:mt-[50px] flex justify-center items-center bg-Yellow w-[300px] text-lg  text-Darkblue font-TimesNewRoman font-bold p-3 rounded"
              onClick={handleClick}
            >
            Submit</button>
          </div>
          <div className="flex flex-col justify-end p-10 h-full">
            <img src={imggg} alt="" className="w-full h-[340px] object-cover rounded-lg"/>
          </div>
        </div>
      </div>

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
                      Paste your project Github Link<span className="text-red-500">*</span>
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
                    Submit
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
