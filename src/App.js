import React, { useMemo, useState } from 'react';
import catImage from './images/cat_logo.jpg'
import AboutComponent from './components/about';
import ExperienceComponent from './components/experience';
import ProfileCompnent from './components/profile';


function App() {

  const [activeComponent, setActiveComponent] = useState('ABOUT')
  console.log("test")
  const components = [
    {
      key: 'ABOUT',
      component: <AboutComponent />
    },
    {
      key: 'PROFILE',
      component: <ProfileCompnent />
    },
    {
      key: 'EXPERIENCE',
      component: <ExperienceComponent />
    },
  ]
  const currentComponent = useMemo(() => {
    return components.find(key => key.key == activeComponent).component
  }, [activeComponent])
  return (

    <div className="container mx-auto ">
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className='h-full w-80 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <div className='container flex items-center space-x-8 p-5 '>
            <img className='w-20 h-20 rounded-full' src={catImage} alt='' />
            <div className='font-medium'>
              <div>Tran Anh Hoan</div>
              <div className='text-sm text-gray-500 dark:text-gray-400'>Front-end Developer</div>
            </div>
          </div>
          <ul className='space-y-2 font-medium'>
            {components.map(item =>
              <li onClick={() => setActiveComponent(item.key)}>
                <a href="#"className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                  <span className='ml-3'>{item.key}</span>
                </a>
              </li>
            )} </ul>
        </div>
      </aside>
      <div className='flex p-4 sm:ml-64 place-content-center h-full'>{currentComponent}</div>
    </div>
  );
}

export default App;