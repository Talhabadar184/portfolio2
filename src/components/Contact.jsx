import React, { useState } from 'react';

function Contact() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        sub: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(inputs);
        localStorage.setItem("user", JSON.stringify(inputs));
        
        setInputs({
            name: "",
            email: "",
            sub: "",
            message: ""
        });
    };

    return (
        <div id='Contact' className='w-full justify-between flex  h-[80vh]'>
            {/* LEFT */}
            <div className='flex flex-col mt-0 items-center mr-3 w-[25%] m-5 h-[720px] bg-transparent'></div>

            {/* MID */}
           
            <div id='Contact' className='w-[60%] h-[450px] flex bg-transparent text-black  '>
               
               
                <div className='w-[55%] flex flex-col m-6 bg-white p-12 dark:bg-black dark:text-white'>
                    
                    <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100' className='ml-5'>Your Full Name</div>
                    <div>
                        <input data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100'
                            className='h-9 ml-5 w-80 bg-gray-500 '
                            type="text"
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='200' className='ml-5'>Your Email</div>
                    <div>
                        <input data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='200'
                            className='h-9 ml-5 w-80 bg-gray-500'
                            type="email"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='300' className='ml-5'>Subject</div>
                    <div>
                        <input data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='300'
                            className='h-9 ml-5 w-80 bg-gray-500'
                            type="text"
                            name="sub"
                            value={inputs.sub}
                            onChange={handleChange}
                        />
                    </div>
                    <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='400' className='ml-5'>Your Message</div>
                    <div>
                        <input data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='400'
                            className='h-20 ml-5 w-80 bg-gray-500'
                            type="text"
                            name="message"
                            value={inputs.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='400'
                            onClick={handleSubmit}
                            className='w-16 h-7 rounded-lg bg-yellow-400 m-8'
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className='w-[40%] flex flex-col bg-transparent mt-5  items-center '>
                  <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100' className=' w-[90%] h-[30%] bg-white mb-3 p-5 dark:bg-black dark:text-white'>
                    <div className='h-1/2 flex items-center justify-center '><img className='dark:bg-white' src="./src/assets/Contact/location.png" alt="" /></div>
                    <div className=' justify-between flex'>
                      <div className='font-semibold'>Country:</div>
                      <div>Pakistan</div>
                    </div>
                    <div className=' justify-between flex'>
                      <div className='font-semibold'>City:</div>
                      <div>Lahore</div>
                    </div>
                  </div>
                  <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='200' className=' w-[90%] h-[30%] bg-white m-5 p-5 dark:bg-black dark:text-white'>
                    <div className='h-1/2 flex items-center justify-center'><img className='dark:bg-white' src="./src/assets/Contact/Mail.png" alt="" /></div>
                    <div className=' justify-between flex'>
                      <div className='font-semibold'>Email1:</div>
                      <div>talhabadar13.1@gmail</div>
                    </div>
                    <div className=' justify-between flex'>
                      <div className='font-semibold'>Email2:</div>
                      <div>workup184@gmail</div>
                    </div>
                  </div>
                  <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='300' className=' w-[90%] h-[30%] bg-white m-5 p-5 dark:bg-black dark:text-white'>
                    <div className='h-1/2 flex items-center justify-center'><img className='dark:bg-white' src="./src/assets/Contact/Mobile.png" alt="" /></div>
                    <div className=' justify-between flex'>
                      <div className='font-semibold'>Office:</div>
                      <div>923416829779</div>
                    </div>
                    <div className=' justify-between flex'>
                      <div className='font-semibold'>Personal:</div>
                      <div>923416829779</div>
                    </div>
                  </div>
                </div>
            </div>
            {/* RIGHT */}
            <div className='ml-3 w-[7%] h-[115vh] bg-transparent'></div>
        </div>
    );
}

export default Contact;
