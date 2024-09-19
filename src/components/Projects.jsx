import React, { useState } from 'react';

// Import your images
import Img1 from '../assets/Projects/ecom.jpg';
import Img2 from '../assets/Projects/netflix.jpg';
import Img3 from '../assets/Projects/spotify2.jpg';
import Img4 from '../assets/Projects/db.jpg';
import Img5 from '../assets/Projects/spotify1.jpg';
import Img6 from '../assets/Projects/pass.jpg';

// Project data array with image references
const Projectsdata = [
  {
    id: 1,
    title: 'E-commerce',
    img: Img1,
  },
  {
    id: 2,
    title: 'Netflix Clone',
    img: Img2,
  },
  {
    id: 3,
    title: 'Spotify Clone 1',
    img: Img3,
  },
  {
    id: 4,
    title: 'Database Uni-project',
    img: Img4,
  },
  {
    id: 5,
    title: 'Spotify Clone 2',
    img: Img5,
  },
  {
    id: 6,
    title: 'Password Generator',
    img: Img6,
  },
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className='w-full justify-between mt-10 flex h-[115vh]'>                  
                         {/* LEFT */}
        <div className='flex flex-col mt-0 items-center mr-3 w-[25%] m-5 h-[115vh] bg-transparent'></div>
                         {/* MID */}
        <div id='Work' className='w-[100%] flex flex-col text-black'>
        <div className="w-full flex justify-center items-center mt-12 h-[120vh]">
          <div className="flex justify-center items-center gap-4 relative" style={{ height: '60vh', width: '80vw' }}>
            {Projectsdata.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative transition-all duration-500 ease-in-out overflow-hidden
                  ${hoveredProject === project.id ? 'z-10' : 'z-0'}`} 
                style={{
                  width: hoveredProject === project.id ? '40%' : '10%', // Expands width on hover
                  height: '100%', // Full height of the parent container
                  position: 'relative', // Ensure it's relative to parent
                  transition: 'width 0.5s ease', // Smooth width transition
                }}
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full object-cover rounded-lg h-[90vh]"
                />

                {/* Title */}
                <div
                  className={`w-full h-[10vh] absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-70 text-white text-center transition-opacity duration-500
                  ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`} // Show title on hover
                  // Ensures the title covers the full card area
                >
                  <span className="text-xl font-bold">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
                             {/* RIGHT */}
        <div className='ml-3 w-[7%] h-[115vh] bg-transparent'></div>
    </div>
  );
}

export default Projects;
