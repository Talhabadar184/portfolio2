import { useState, useEffect } from "react";
import Dark from "./Dark";
import React from "react";


function Home() {
  return (
    <div className="flex justify-between w-100%">
      {/* LEFT */}
      <div
        className="flex flex-col items-center mr-3 w-[25%] h-[115vh] transition duration-500 ease-out transform bg-white 
        dark:bg-black dark:text-white  "
      >
        <div className="w-full h-[70vh] flex flex-col mt-1 items-center">
          <div>
            <img
              className="rounded-full w-[150px] h-[150px] justify-center items-center"
              src="./src/assets/left/profile.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='100'
             className="text-2xl font-bold m-2">Talha Badar</h1>
          </div>
          <div>
            <p>Frontend Developer</p>
          </div>
          <div className="flex gap-2  justify-center mt-3">
            <a href="https://www.facebook.com/talha.badar.311/">
              <div className="bg-yellow-500 w-[2vw] h-[2vw] rounded-full flex justify-center items-center">
                <img className="w-[1.4vw] h-[3vh]" src="./src/assets/left/fb.png" alt="1" />
              </div>
            </a>
            <a href="https://www.instagram.com/talha_badar_13/">
              <div className="bg-yellow-500 w-[2vw] h-[2vw] rounded-full flex justify-center items-center">
                <img className="w-[1.4vw] h-[3vh]" src="./src/assets/left/insta.png" alt="1" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/talha-badar-312195253/">
              <div className="bg-yellow-500 w-[2vw] h-[2vw] flex rounded-full justify-center items-center">
                <img className="w-[1.4vw] h-[3vh]" src="./src/assets/left/linkedin.png" alt="1" />
              </div>
            </a>
            <a href="">
              <div className="bg-yellow-500 w-[2vw] h-[2vw] rounded-full justify-center items-center flex">
                <img className="w-[1.4vw] h-[3vh]" src="./src/assets/left/twitter.png" alt="1" />
              </div>
            </a>
            <div className="bg-yellow-500 w-[2vw] h-[2vw] rounded-full justify-center items-center flex">
              <img className="w-[1.4vw] h-[3vh]" src="./src/assets/left/youtube.png" alt="1" />
            </div>
          </div>
        </div>
        <div className="bg-black w-[60%] h-[1vh] dark:bg-white dark:text-white"></div>
        <div className="w-[40%] h-[45%] flex flex-col text-1xl font-semibold mt-5 items-center">
          <div className="flex justify-between w-[18vw] m-1">
            <div className="bg-yellow-400 p-1">Age:</div>
            <div className="p-2">21</div>
          </div>
          <div className="flex justify-between w-[18vw] m-1">
            <div className="bg-yellow-400 p-1">Residence:</div>
            <div className="p-2">Pak</div>
          </div>
          <div className="flex justify-between w-[18vw] m-1">
            <div className="bg-yellow-400 p-1">Freelance:</div>
            <div className="p-2">Available</div>
          </div>
          <div className="flex justify-between w-[18vw] m-1">
            <div className="bg-yellow-400 p-1">Address:</div>
            <div className="p-2">Pak</div>
          </div>
          <div className="bg-black w-[150%] mt-8 h-[1vh] dark:bg-white dark:text-white"></div>
        </div>
        <div className="mr-24 text-2xl font-bold">Languages</div>
      </div>

      {/* MID */}
      <div
        id="Home"
        className="w-[65%] h-[20%] flex flex-col relative transition duration-500 ease-out transform 
          
        "
      >
        <img className="w-full h-full object-cover" src="./src/assets/mid/bg.png" alt="background" />
        <img className="absolute top-5 left-10" src="./src/assets/mid/Ellipseyellow.png" alt="top-left" />
        <img className="absolute top-5 right-10" src="./src/assets/mid/Ellipsegreen.png" alt="top-right" />
        <img className="absolute bottom-5 left-10" src="./src/assets/mid/Polygonred.png" alt="bottom-left" />
        <img className="absolute bottom-5 right-10" src="./src/assets/mid/Rectangleblue.png" alt="bottom-right" />
        <img
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          src="./src/assets/mid/Rectangleyellow.png"
          alt="center-bottom"
        />

        <div className="absolute top-0 left-0 w-full h-full flex">
          <div className="w-[50%] flex items-center justify-center p-8">
            <div>
              <h1 data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='100'
               className="text-3xl font-bold mb-4">I'm Talha Badar</h1>
              <h1 
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-delay='200'
              className="text-3xl font-bold mb-4 text-yellow-500 ">
                Frontend Developer
              </h1>
              <p data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='300'
              className="text-lg">
                This section can have a description or bio information. You can add additional details about yourself, your
                skills, or any other relevant information.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img className="w-[70%] h-[90%] rounded-xl object-cover" src="./src/assets/mid/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="ml-3 w-[7%] h-[115vh] sticky transition duration-500 ease-out transform bg-white 
        dark:bg-black dark:text-white"
      >
        <div className="w-[80px] flex flex-col justify-center items-center">
          <div>
            <Dark/>
          </div>
          <a href="#Home">
            <div>
              <button 
                 data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100'
                 className="mb-5 bg-gray-300 flex justify-center items-center rounded-full w-[30px] h-[30px]">
                <img src="./src/assets/right/Home.png" alt="Home" />
              </button>
            </div>
          </a>
          <a href="#Services">
            <div>
              <button  data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='200'
              className="mb-5 bg-gray-300 flex justify-center items-center rounded-full w-[30px] h-[30px]">
                <img src="./src/assets/right/Services.png" alt="Services" />
              </button>
            </div>
          </a>
          <a href="#Education">
            <div>
              <button data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='300'
                 className="mb-5 bg-gray-300 flex justify-center items-center rounded-full w-[30px] h-[30px]">
                <img src="./src/assets/right/cv.png" alt="Education" />
              </button>
            </div>
          </a>
          <a href="#Portfolio">
            <div>
              <button data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='400'
              className="mb-5 bg-gray-300 flex justify-center items-center rounded-full w-[30px] h-[30px]">
                <img src="./src/assets/right/Portfolio.png" alt="Portfolio" />
              </button>
            </div>
          </a>
          <a href="#Contact">
            <div>
              <button  data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='500'
              className="mb-5 bg-gray-300 flex justify-center items-center rounded-full w-[30px] h-[30px]">
                <img src="./src/assets/right/Contact.png" alt="Contact" />
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
