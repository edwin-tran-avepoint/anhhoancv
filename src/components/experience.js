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
            <p className='font-bold'>04/2022 - 08/2023</p>
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
           <div className='block'>
            <p className='font-bold'>08/2023 - 02/2024</p>
            <p className='font-semibold'>SMART HOME</p>
            <p className='font-medium'>Avepoint Inc </p>
            <p>
              <span className='font-bold'>-Description:</span> an admin system to manage user and tracking their daily routine, as well as their work.
            </p>
            <p>
              <span className='font-bold'>-Tech:</span>: React TS, GITLAB, JIRA.
            </p>

            <span className='font-bold'>-Role:</span>
            <div className='grid gap-1'>
              <div>Use React TS to develop the front-end.</div>
              <div>Manual testing for frontend.</div>
            </div >
          </div>
          <div className='block'>
            <p className='font-bold'>02/2023 - 10/2024</p>
            <p className='font-semibold'>Institute for Human Resource Professionals</p>
            <p className='font-medium'>Avepoint Inc </p>
            <p>
              <span className='font-bold'>-Description:</span> a community service, connect user in HR field in Singapore into a sharing community.
            </p>
            <p>
              <span className='font-bold'>-Tech:</span>: React JS, GITLAB, JIRA.
            </p>
            <span className='font-bold'>-Role:</span>
            <div className='grid gap-1'>
              <div>Use React JS to develop the front-end. Responsible module: Community management</div>
              <div>Instruct team members on best practices and code reviews.</div>
              <div>Manual testing for frontend.</div>
              <div>Analyze business requirements and translate them into technical specifications.</div>
            </div >
          </div>
          <div className='block'>
            <p className='font-bold'>10/2023 - 02/2025</p>
            <p className='font-semibold'>Institute for Human Resource Professionals - JRCOE</p>
            <p className='font-medium'>Avepoint Inc</p>
            <p>
              <span className='font-bold'>-Description:</span> Create survey service for HR professionals in Singapore, allowing them to manage and have vision for their career path
            </p>
            <p>
              <span className='font-bold'>-Tech:</span>: React JS, GITLAB, JIRA.
            </p>
            <span className='font-bold'>-Role:</span>
            <div className='grid gap-1'>
              <div>Use React JS to develop the front-end. Module Survey</div>
              <div>Instruct team members on best practices and code reviews.</div>
              <div>Manual testing for frontend.</div>
              <div>Analyze business requirements and translate them into technical specifications.</div>
            </div >
          </div>
          <div className='block'>
            <p className='font-bold'>12/2025 - Present</p>
            <p className='font-semibold'>HRIS</p>
            <p className='font-medium'>Avepoint Inc</p>
            <p>
              <span className='font-bold'>-Description:</span>HR assist system. Assist HR and manager manage employee, goals, request and task... And provide create request function to request absence, extra time... 
            </p>
            <p>
              <span className='font-bold'>-Tech:</span>: React TS, GITLAB, JIRA, .Net.
            </p>
            <span className='font-bold'>-Role:</span>
            <div className='grid gap-1'>
              <div>Use React JS to develop the front-end. Module Request, Task, Role Management.</div>
              <div>Manual testing and automation testing for frontend.</div>
              <div>Analyze business requirements and translate them into technical specifications.</div>
            </div >
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default React.memo(ExperienceComponent);