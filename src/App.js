import React, { useMemo, useState } from 'react';
import catImage from '../src/components/htmlToPdf/images/cat_logo.jpg'
import AboutComponent from './components/about';
import ExperienceComponent from './components/experience';
import ProfileCompnent from './components/profile';
import DownloadButton from '../src/components/htmlToPdf/DownloadButton';


function App() {

  const [activeComponent, setActiveComponent] = useState('ABOUT')
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

    <div className='container mx-auto'>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-auto h-screen transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full w-1/4 px-3 py-4 overflow-y-auto text-white bg-violet-600 dark:bg-gray-800">
          <div className="container flex items-center space-x-8 p-5 ">
            <img src={catImage} className="w-20 h-20 rounded-full" />
            <div className="font-medium">
              <div>Tran Anh Hoan</div>
              <div className='text-sm text-gray-900 dark:text-gray-400'>Front-end Developer</div>
            </div>
          </div>
          <div className='container p-5 flex flex-col'>
            <div className='block w-full p-6 bg-white border border-gray-200 rounded-lg shadow space-y-10'>
              <div>
                <div className='font-extrabold text-xl text-gray-900'>About me</div>
                <div className='text-base text-gray-500'>I'm a self-driven and self-motivated person with
                  well communication, quick learner and be
                  interested in researching new things and also a
                  passionate software engineer with roughly two - year experience in software development that
                  mainly focus on React JS.</div>
              </div>
            </div>
          </div>
          <div className='container p-5 flex flex-col'>
            <div className='block w-full p-6 bg-white border border-gray-200 rounded-lg shadow space-y-10'>
              <div className='block'>
                <div className='font-extrabold text-xl text-gray-900'>Contact</div>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                  <div>
                    <div className='text-base text-gray-500'>ADDRESS</div>
                    <div className='text-base text-gray-900'>Da Nang</div>
                  </div>
                  <div>
                    <div className='text-base text-gray-500'>PHONE</div>
                    <div className='text-base text-gray-900'>0393 999 682</div>
                  </div>
                  <div>
                    <div className='text-base text-gray-500'>BIRTHDAY</div>
                    <div className='text-base text-gray-900'>01/08/1997</div>
                  </div>
                  <div>
                    <div className='text-base text-gray-500'>EMAIL</div>
                    <div className='text-base text-gray-900'>anhhoan1897@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className='block'>
                <div className='font-extrabold text-xl text-gray-900'>Skill</div>
                <div className='grid grid-rows-3 grid-flow-col gap-1'>
                  <div>HTML, CSS</div>
                  <div>REACT JS</div>
                  <div>AWS SERVICES</div>
                </div>

              </div>
              <div className='block'>
                <div className='font-extrabold text-xl text-gray-900'>Certificate</div>
                <div className='text-base xl-gray-500'>IELTS 6.</div>
              </div>
              <div className='block'>
                <div className='font-extrabold text-xl text-gray-900'>Interest</div>
                <div className='grid grid-rows-3 grid-flow-col gap-1'>
                  <div>FOOTBALL</div>
                  <div>VIDEO GAME</div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h3><i className="fa fa-pie-chart"></i>Skills</h3>
            <p>HTML, CSS,</p>
            <p>REACTJS</p>
            <p>AWS SERVICES</p>
          </div>
          <div className="certificate">
            <h3><i className="fa fa-certificate"></i>CERTIFICATE</h3>
            IELTS 6.0 (2015)
          </div>
          <div className="interest">
            <h3><i className="fa fa-puzzle-piece"></i>INTERESTS</h3>
            <p>Game</p>
            <p>Books</p>
            <p>Football</p>
          </div>
        </div>
      </aside>

      {/* <div className="work">
        <div className="education">
          <h3><i className="fa fa-graduation-cap"></i>Education</h3>
          <p>2015 - 2020</p>
          <p>DA NANG UNIVERSITY OF SCIENCE & TECHNOLOGY</p>
          <span>-Degree of Engineer: Embedded System engineer</span> <br />
          <span>-Average mark: 2.55/4</span>
        </div>
        <div className="experience">
          <h2><i className="fa fa-briefcase"></i>Experience</h2>
          <ul>
            <li>
              <span>11/2020 - 02/2021 <br />
                INTERNSHIP
              </span>
              <small>Orient Software Development </small>
              <small><span>-Description:</span>internship program includes trainings
                in GoLang, React JS, Docker, GraphQL </small>
            </li>
            <li>
              <span>
                03/2021 - 03/2022 <br />
                SAMURAI (Japan)
              </span>
              <small>Orient Software Development </small>
              <small><span>-Description:</span>a system to manage financial assets in
                a blockchain environment</small>
              <small><span>-Tech: </span>ReactJs </small>
              <small>
                <span>-Role: </span>
                <ul>
                  <li>Build UI/UX base on customer design</li>
                  <li>Analyze requirement from customer, setup plan to process</li>
                  <li>Write document for customers</li>
                </ul></small>
            </li>
            <li>
              <span
              >04/2022 - Present <br />
                INCLOUD (Japan)
              </span>
              <small>Orient Software Development </small>
              <small><span>-Description:</span>: an observation service for all of their
                clients. Using serverless to handle request and
                response</small>
              <small><span>-Tech: </span>ReactJs, Python, AWS </small>
              <small>
                <span>-Role: </span>
                <ul>
                  <li>Backend development</li>
                  <li>Testing, fix bug for frontend and backend</li>
                  <li>Set up some AWS Services</li>
                  <li>Write document for customers</li>
                  <li>Analyze and set up plan from customer requirement</li>
                </ul></small>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default App;