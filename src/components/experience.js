import React from "react";

const ExperienceComponent = () => {
  return (
    <div className='container p-5 flex flex-col'>
      <div className='block w-full p-6 bg-white border border-gray-200 rounded-lg shadow space-y-5'>
        <div className='block  space-y-3'>
          <p className='font-extrabold text-xl text-gray-900'>EXPERIENCE</p>
          <div className='block'>
            <p className='font-bold'>11/2020 - 02/2021</p>
            <p className='font-semibold'>INTERNSHIP</p>
            <p className='font-medium'>Orient Software Development</p>
            <p>
              <span>-Description:</span> internship program includes
              trainings in GoLang, React JS, Docker, GraphQL
            </p>
          </div>
          <div className='block'>
            <p className='font-bold'>03/2021 - 03/2022</p>
            <p className='font-semibold'>SAMURAI (JAPAN)</p>
            <p className='font-medium'>Orient Software Development</p>
            <p>
              <span className='font-bold'>-Description:</span> a system to manage financial assets
              in a blockchain environment. Building mobile responsive include fetching api using ReactJS library
            </p>
            <p>
              <span className='font-bold'>-Tech</span>: React JS.
            </p>
            <span className='font-bold'>-Role:</span>
            <div className='grid gap-1'>
              <div>Front-end Developer</div>
              <div>Receive tasks from leader and break them down
                into micro duties to follow</div>
              <div>Develop and maintain the user interface</div>
            </div>
          </div>
          <div className='block'>
            <p className='font-bold'>04/2022 - Present</p>
            <p className='font-semibold'>INCLOUD (JAPAN)</p>
            <p className='font-medium'>Orient Software Development</p>
            <p>
              <span className='font-bold'>-Description:</span>  an observation service for all of their
              clients. Using serverless to handle request and
              response.
            </p>
            <p>
              <span className='font-bold'>-Tech:</span>: React JS, Python, AWS Services.
            </p>

            <span className='font-bold'>-Role:</span>
            <div className='grid gap-1'>
              <div>Learn and use python to code lambda function
                for back-end</div>
              <div>Use ReactJS to develop front-end.</div>
              <div>Learn and use service in AWS</div>
              <div>Manual testing for frontend and write test case for backend</div>
              <div>Prepare document for customer</div>
            </div >
          </div>
        </div>
      </div>

    </div>
  )
}

export default React.memo(ExperienceComponent);