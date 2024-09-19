import React, { useState, useEffect } from 'react';


function Services() {
  const [urduPercentage, setUrduPercentage] = useState(100);
  const [englishPercentage, setEnglishPercentage] = useState(80);
  const [Frontendpercentage, setFrontendpercentage] = useState(80);
  const [Reactpercentage, setReactpercentage] = useState(80);
  const [Tailwindpercentage, setTailwindpercentage] = useState(80);
  const [Javascriptpercentage, setJavascriptpercentage] = useState(80);
  const [Graphicpercentage, setGraphicpercentage] = useState(80);
  const [Dbpercentage, setDbpercentage] = useState(80);


  return (
    <div className='flex justify-between w-full h-[100%]'>
      {/* LEFT */}
      <div
        
        className="flex flex-col mt-0 items-center mr-3 w-[25%] h-[115vh] bg-white transition duration-500 ease-out transform  dark:bg-black dark:text-white"
        
      >
        {/* Languages Section */}
        <div  className="w-[42%] h-[150px] flex flex-col text-xl font-semibold text-black mt-2 items-center transition duration-500 ease-out transform dark:bg-black dark:text-white ">
          <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100' className='flex justify-between w-[152%] m-1'>
            <div>Urdu:</div>
            <div>{urduPercentage}%</div>
          </div>
          <div  data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='100'
           className='w-[150%] items-center mt-2'>
            <input
              type='range'
              min='0'
              max='100'
              value={urduPercentage}
              onChange={(e) => setUrduPercentage(e.target.value)}
              className='slider w-full'
            />
          </div>
          <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='200' className='flex justify-between w-[152%] m-1'>
            <div>English:</div>
            <div>{englishPercentage}%</div>
          </div>
          <div data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='200'
            className='w-[150%] items-center'>
            <input
              type='range'
              min='0'
              max='100'
              value={englishPercentage}
              onChange={(e) => setEnglishPercentage(e.target.value)}
              className='slider w-full fill-yellow-400'
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-[42%]  flex flex-col text-xl font-semibold text-black items-center transition duration-500 ease-out transform dark:bg-black dark:text-white ">
          <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100'>
            <h1 className='text-2xl font-bold'>Skills</h1>
          </div>
          <div className='w-[42%]  flex flex-col text-xl font-semibold text-black items-center dark:bg-black dark:text-white'>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100'  className='flex justify-between mb-3 w-[380%]'>
              <div>Frontend:</div>
              <div>{Frontendpercentage}%</div>
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100'
              className='w-[372%] items-center'>
              <input
                type='range'
                min='0'
                max='100'
                value={Frontendpercentage}
                onChange={(e) => setFrontendpercentage(e.target.value)}
                className='slider w-full bg-yellow-400'
              />
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='200' className='flex justify-between mt-3 w-[380%]'>
              <div>React:</div>
              <div>{Reactpercentage}%</div>
            </div>
            <div  data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='200'
            className='w-[372%] items-center'>
              <input
                type='range'
                min='0'
                max='100'
                value={Reactpercentage}
                onChange={(e) => setReactpercentage(e.target.value)}
                className='slider w-full'
              />
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='300' className='flex justify-between mt-3 w-[380%]'>
              <div>Tailwind:</div>
              <div>{Tailwindpercentage}%</div>
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='300'
            className='w-[372%] items-center'>
              <input
                type='range'
                min='0'
                max='100'
                value={Tailwindpercentage}
                onChange={(e) => setTailwindpercentage(e.target.value)}
                className='slider w-full'
              />
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='400' className='flex justify-between mt-3 w-[380%]'>
              <div>Javascript:</div>
              <div>{Javascriptpercentage}%</div>
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='400'
               className='w-[372%] items-center'>
              <input
                type='range'
                min='0'
                max='100'
                value={Javascriptpercentage}
                onChange={(e) => setJavascriptpercentage(e.target.value)}
                className='slider w-full'
              />
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='500' className='flex justify-between mt-3 w-[380%]'>
              <div>3D Graphics:</div>
              <div>{Graphicpercentage}%</div>
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='500'
            className='w-[372%] items-center'>
              <input
                type='range'
                min='0'
                max='100'
                value={Graphicpercentage}
                onChange={(e) => setGraphicpercentage(e.target.value)}
                className='slider w-full'
              />
            </div>
            <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='600' className='flex justify-between mt-3 w-[380%]'>
              <div>DB My-SQl:</div>
              <div>{Dbpercentage}%</div>
            </div>
            <div  data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='600' className='w-[372%] items-center'>
              <input
                type='range'
                min='0'
                max='100'
                value={Dbpercentage}
                onChange={(e) => setDbpercentage(e.target.value)}
                className='slider w-full'
              />
            </div>
          </div>
        </div>
      </div>

      {/* MID */}
      <div
        
        id='Services'
        className="w-[65%] h-[30%] flex flex-col relative transition duration-500 ease-out transform dark:bg-black dark:text-white"
      >
        <div className='w-full h-[100px] flex flex-col justify-center text-center items-center bg-transparent text-black dark:text-white'>
          <div>
            <h1 data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100' className='text-3xl font-bold m-3'>My Services</h1>
          </div>
          <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className='mw-full h-[70vh] flex flex-wrap bg-transparent gap-3 '>
          <div data-aos='zoom-out-up'
                 data-aos-duration='500'
                 data-aos-delay='200' className='w-[30%] h-[38%] ml-6 flex flex-col justify-center items-center bg-white dark:bg-gray-200 dark:text-black '>
            <img className='' src='./src/assets/Services/coding.png' alt='1' />
            <h2 className='font-bold'>Web Development</h2>
            <p>Blog, E-Commerce, Portfolio</p>
          </div>
          <div data-aos='zoom-out-up'
                 data-aos-duration='500'
                 data-aos-delay='200' className='w-[30%] h-[38%] flex flex-col justify-center items-center bg-white dark:bg-gray-200 dark:text-black'>
            <img src='./src/assets/Services/coding.png' alt='1' />
            <h2 className='font-bold'>Frontend Development</h2>
            <p>Any Sort of Websites</p>
          </div>
          <div data-aos='zoom-out-up'
                 data-aos-duration='5000'
                 data-aos-delay='200' className='w-[30%] h-[38%] flex flex-col justify-center items-center bg-white dark:bg-gray-200 dark:text-black'>
            <img src='./src/assets/Services/illustration.png' alt='1' />
            <h2 className='font-bold'>UI/UX</h2>
            <p>Mobile App, Web Design</p>
          </div>
          <div data-aos='zoom-out-up'
                 data-aos-duration='500'
                 data-aos-delay='300' className='w-[30%] h-[38%] mt-5 ml-6 flex flex-col justify-center items-center bg-white dark:bg-gray-200 dark:text-black'>
            <img src='./src/assets/Services/illustration.png' alt='1' />
            <h2 className='font-bold'>3D-Graphics</h2>
            <p>Basic Modeling</p>
          </div>
          <div data-aos='zoom-out-up'
                 data-aos-duration='500'
                 data-aos-delay='300' className='w-[30%] h-[38%] mt-5 flex flex-col justify-center items-center bg-white dark:bg-gray-200 dark:text-black'>
            <img src='./src/assets/Services/coding.png' alt='1' />
            <h2 className='font-bold'>Graphics</h2>
            <p>Logos, Posters, Business Cards</p>
          </div>
          <div data-aos='zoom-out-up'
                 data-aos-duration='500'
                 data-aos-delay='300' className='w-[30%] h-[38%] mt-5 flex flex-col justify-center items-center bg-white dark:bg-gray-200 dark:text-black'>
            <img src='./src/assets/Services/coding.png' alt='1' />
            <h2 className='font-bold'>Backend Developer</h2>
            <p>Blog, E-commerce, Business</p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="ml-3 w-[7%] h-[115vh] bg-white transition duration-500 ease-out transform dark:bg-black dark:text-white "
      >
      </div>
    </div>
  );
}

export default Services;
