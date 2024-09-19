import React from 'react'

function Education() {
  return (
    <div className='w-full justify-between mt-10 flex h-[125vh]'>                  
                         {/* LEFT */}
        <div className='flex flex-col mt-0 items-center mr-3 w-[25%] m-5 h-[120vh] bg-transparent'></div>
                         {/* MID */}
            <div id='Education' className='w-[60%]  flex flex-col   text-black  '>
                <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100' className='w-full h-[30vh]  flex flex-col justify-center text-center  items-center bg-transparent  '>
                  <div><h1 className='text-3xl font-bold m-3'>Education</h1></div>
                  <div><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>
                </div>
                                    {/* CARD 1 */}
                <div className='flex flex-col w-full mt-5   bg-white dark:bg-black dark:text-white '>
                  <div className='flex w-full h-[35vh]'>  
                    <div data-aos='fade-up'
                 data-aos-duration='400'
                 data-aos-delay='200' className='w-1/2 flex flex-col items-center justify-center'>
                      <h1 className='font-bold mb-2'>University of Central Punjab</h1>
                      <p className='text-1xl font-semibold'>Student <span className='ml-4 bg-yellow-400'>20203-present</span></p>
                    </div>
                    <div data-aos='fade-up'
                 data-aos-duration='400'
                 data-aos-delay='200' className='flex flex-col justify-center items-center'> 
                       <h1 className=' font-bold mb-2'> Bachelors of Computer Sciences</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iusto?</p>
                    </div>
                  </div>
                </div>
                                     {/* CARD 2 */}
                <div className='flex flex-col w-full  bg-white dark:bg-black dark:text-white '>
                <div className='flex w-full h-[35vh]'>  
                    <div data-aos='fade-up'
                 data-aos-duration='400'
                 data-aos-delay='300'  className='w-1/2 flex flex-col items-center justify-center'>
                      <h1 className='font-bold mb-2'>Punjab Group of Colleges</h1>
                      <p className='text-1xl font-semibold'>Student <span className='ml-4 bg-yellow-400'>2021-2022</span></p>
                    </div>
                    <div data-aos='fade-up'
                 data-aos-duration='400'
                 data-aos-delay='300' className='flex flex-col justify-center items-center'> 
                       <h1 className=' font-bold mb-2'> FSc Pre-Engineering</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iusto?</p>
                    </div>
                  </div>
                </div>
                                       {/* CARD 3 */}
                <div className='flex flex-col w-full  bg-white dark:bg-black dark:text-white '>
                <div className='flex w-full h-[35vh]'>  
                    <div data-aos='fade-up'
                 data-aos-duration='400'
                 data-aos-delay='400' className='w-1/2 flex flex-col items-center justify-center'>
                      <h1 className='font-bold mb-2'>Khyaban Public School (KPSI)</h1>
                      <p className='text-1xl font-semibold'>Student <span className='ml-4 bg-yellow-400'>2019-2020</span></p>
                    </div>
                    <div data-aos='fade-up'
                 data-aos-duration='400'
                 data-aos-delay='400' className='flex flex-col justify-center items-center'> 
                       <h1 className=' font-bold mb-2'> Matriculation </h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iusto?</p>
                    </div>
                  </div>
                </div>
             </div>

        <div className='ml-3 w-[7%] h-[125vh] bg-transparent'></div>
        
    </div>
  )
}

export default Education