import React from 'react';


const Dark = () => {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement; // Selecting the root element

  React.useEffect(() => {
    // If no theme is set in localStorage, default to 'li.aght'
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
      setDarkMode('light');
    }
  }, []);

  React.useEffect(() => {
    if (darkMode === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, element]);

  return (
    <div className='relative '>
      <img
        src='./src/assets/right/Vector.png'
        alt='Vector'
        className="flex justify-center items-center mb-60 w-[30px] h-[30px] cursor-pointer"
        onClick={() => setDarkMode(darkMode === 'dark' ? 'light' : 'dark')}
      />
      
    </div>
  );
};

export default Dark;
