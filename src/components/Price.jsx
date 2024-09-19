import React from 'react'

function Price() {
  return (
<div className='flex justify-between w-100% h-[500px]'>
    {/* // LEFT */}
    <div className='flex flex-col mt-0 items-center mr-3 w-[25%] h-[120vh] bg-transparent'></div>
                                            {/* MID */}
    <div  className='w-[65%] mouse   flex flex-col bg-transparent relative  '>
        <div data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100' className='w-full h-[30vh] flex flex-col justify-center text-center items-center bg-transparent  text-black'>
            <div><h1 className='text-3xl font-bold m-3'>Price Plans</h1></div>
            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>
        </div>
                                       
        <div  className='mw-full h-[450px] flex flex-wrap bg-transparent  gap-7 justify-center '>
                                  {/* SILVER */}
            <div data-aos='fade-up-right'
                 data-aos-duration='500'
                 data-aos-delay='100' className='w-[25%] dark:bg-black dark:text-white cursor-pointer h-[90%] bg-white flex rounded-md  items-center flex-col transition-transform duration-300 ease-in-out transform hover:scale-105'>
                    <div><h1 className='mt-10 font-bold text-2xl'>Silver</h1></div>
                    <div><h1 className='mt-3 font-bold text-2xl'>$25.00 <span className='text-sm'>/Hour</span></h1></div>
                    <div className='mt-2'>Lorem ipsum dolor sit amet.</div>
                <div className='w-[65%] mt-3 flex flex-col'>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>UI/UX</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>Frontend </h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Close.png" alt="1" />
                        <h2 className='font-semibold'>Web Develp</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Close.png" alt="1" />
                        <h2 className='font-semibold'>3D Graphics</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Close.png" alt="1" />
                        <h2 className='font-semibold'>Backend</h2>
                    </div>
                </div>
            </div>
                                            {/* GOLD */}
            <div  data-aos='fade-up'
                 data-aos-duration='500'
                 data-aos-delay='100'className='w-[25%] dark:bg-black dark:text-white cursor-pointer h-[100%] bg-white flex rounded-md  items-center flex-col transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <div><h1 className='mt-10 font-bold text-2xl'>Gold</h1></div>
                  <div><h1 className='mt-3 font-bold text-2xl'>$50.00 <span className='text-sm'>/Hour</span></h1></div>
                 <div className='mt-2'>Lorem ipsum dolor sit amet.</div>
                 <div className='w-[65%] mt-3 flex flex-col'>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>UI/UX</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>Frontend </h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>Web Develp</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Close.png" alt="1" />
                        <h2 className='font-semibold'>3D Graphics</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Close.png" alt="1" />
                        <h2 className='font-semibold'>Backend</h2>
                    </div>
                    <label htmlFor="" className='p-1 cursor-pointer mt-1 flex  justify-center bg-yellow-400 rounded-[50px]'>Popular</label>
                </div>        
            </div>
            
                 {/* DIAMOND */}
            <div data-aos='fade-up-left'
                 data-aos-duration='500'
                 data-aos-delay='100' className='w-[25%] dark:bg-black dark:text-white h-[90%] bg-white flex rounded-md cursor-pointer  items-center flex-col transition-transform duration-300 ease-in-out transform hover:scale-105'>
             <div><h1 className='mt-10 font-bold text-2xl'>Diamond</h1></div>
                  <div><h1 className='mt-3 font-bold text-2xl'>$100.00 <span className='text-sm'>/Hour</span></h1></div>
                 <div className='mt-2'>Lorem ipsum dolor sit amet.</div>
                 <div className='w-[65%] mt-3 flex flex-col'>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>UI/UX</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>Frontend </h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>Web Develp</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>3D Graphics</h2>
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <img src="./src/assets/price/Check.png" alt="1" />
                        <h2 className='font-semibold'>Backend</h2>
                    </div>
                </div>        

             </div>
        </div>
    </div>                        


                                            {/* RIGHT */}
    <div className='ml-3 w-[7%] h-[120vh] bg-transparent '></div>             




</div>
  )
}

export default Price