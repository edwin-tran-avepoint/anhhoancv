import catImage from './images/cat_logo.jpg'
// import './App.css';

function App() {
  return (
    <div className="container mx-auto ">
      <div className='container flex items-center space-x-4'>
        <img className='w-10 h-10 rounded-full' src={catImage} alt='' />
        <div className='font-medium'>
          <div>Tran Anh Hoan</div>
          <div className='text-sm text-gray-500 dark:text-gray-400' >Front-end Developer</div>
        </div>
      </div>
      <div className='container flex flex-row'>
        <div className='container p-5 flex flex-col'>
          <div className='block w-full p-6 bg-white border border-gray-200 rounded-lg shadow  '>
            <div>
              <div className='font-bold text-xl text-gray-900'>About me</div>
              <div className='text-base text-gray-500'>I'm a self-driven and self-motivated person with
                well communication, quick learner and be
                interested in researching new things and also a
                passionate software engineer with roughly two - year experience in software development that
                mainly focus on React JS.</div>
            </div>

            <div className='block'>
              <div className='font-bold text-xl text-gray-900'>Contact</div>
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
                {/* <table>
                  <tr>
                    <td>ADDRESS</td>
                    <td>Da Nang</td>
                  </tr>
                  <tr>
                    <td>PHONE</td>
                    <td>0393 999 682</td>
                  </tr>
                  <tr>
                    <td>BIRTHDAY</td>
                    <td>01/08/1997</td>
                  </tr>
                  <tr>
                    <td>EMAIL</td>
                    <td>anhhoan1897@gmail.com</td>
                  </tr>
                </table> */}
              </div>
            </div>
            <div className='block'>
              <div className='font-bold text-xl text-gray-900'>Skill</div>
              <div className='grid grid-rows-3 grid-flow-col gap-1'>
                <div>HTML, CSS</div>
                <div>REACT JS</div>
                <div>AWS SERVICES</div>
              </div>

            </div>
            <div className='block'>
              <div className='font-bold text-xl text-gray-900'>Certificate</div>
              <div className='text-base xl-gray-500'>IELTS 6.</div>
            </div>
            <div className='block'>
              <div className='font-bold text-xl text-gray-900'>Interest</div>
              <div className='grid grid-rows-3 grid-flow-col gap-1'>
                <div>FOOTBALL</div>
                <div>VIDEO GAME</div>
              </div>
            </div>
          </div>
        </div>

        <div className='container p-5 flex flex-col'>
          <div className='block w-full p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <div className='education-detail'>
              <p>EDUCATION</p>
              <p>2015-2020</p>
              <p>DA NANG UNIVERSITY OF SCIENCE & TECHNOLOGY</p>
              <p>
                - Degree of Engineer: Embedded System engineer
                - Average mark: 2.55/4
              </p>
            </div>
            <div className='experience-detail'>
              <p>EXPERIENCE</p>
              <div className='internship'>
                <p>11/2020 - 02/2021</p>
                <p>INTERNSHIP</p>
                <p>Orient Software Development</p>
                <p>
                  <span>-Description:</span> internship program includes
                  trainings in GoLang, React JS, Docker, GraphQL
                </p>
              </div>
              <div className='samurai-project'>
                <p>03/2021 - 03/2022</p>
                <p>SAMURAI (JAPAN)</p>
                <p>Orient Software Development</p>
                <p>
                  <span>-Description:</span> a system to manage financial assets
                  in a blockchain environment. Building mobile responsive include fetching api using ReactJS library
                </p>
                <p>
                  <span>-Tech:</span>: React JS.
                </p>
                <>
                  <span>-Role:</span>
                  <li>
                    <ul>Front-end Developer</ul>
                    <ul>Receive tasks from leader and break them down
                      into micro duties to follow</ul>
                    <ul>Develop and maintain the user interface</ul>
                  </li>
                </>
              </div>
              <div className='samurai-project'>
                <p>04/2022 - Present</p>
                <p>INCLOUD (JAPAN)</p>
                <p>Orient Software Development</p>
                <p>
                  <span>-Description:</span>  an observation service for all of their
                  clients. Using serverless to handle request and
                  response.
                </p>
                <p>
                  <span>-Tech:</span>: React JS, Python, AWS Services.
                </p>
                <>
                  <span>-Role:</span>
                  <li>
                    <ul>Learn and use python to code lambda function
                      for back-end</ul>
                    <ul>Use ReactJS to develop front-end.</ul>
                    <ul>Learn and use service in AWS</ul>
                    <ul>Manual testing for frontend and write test case for backend</ul>
                    <ul>Prepare document for customer</ul>
                  </li>
                </>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;