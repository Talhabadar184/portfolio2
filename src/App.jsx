import Home from './components/Home'
import Services from './components/Services'
import Price from './components/Price'
import Education from './components/Education'
import Work from './components/work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'



function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
 

  return (
    
    <div className='bg-gray-300'>
       <Home/>
       <Services/>
       <Price/>
       <Education/>
       <Work/>
       <Projects/>
       <Contact/>
    </div>
   
   
  )
}

export default App
