import logo from './logo.svg';
import catImage from './images/cat_logo.jpg'
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div>
        <div className='profile-header'>
          <img src={catImage} alt='profile-pic' className='profile' />
          <p>Tran Anh Hoan</p>
          <p>Frontend Developer</p>
          <div className='about-me'>
            <p>About me</p>
            <p>I'm a self-driven and self-motivated person with
              well communication, quick learner and be
              interested in researching new things and also a
              passionate software engineer with roughly two - year experience in software development that
              mainly focus on React JS.</p>
          </div>
        </div>
        <div className='profile-info'>
          <div className='contact-info'>
            <p className='contact'>
              <p>Contact</p>
              <table>
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
              </table>
            </p>
          </div>
          <div className='skill-info'>
            <p>HTML, CSS</p>
            <p>REACT JS</p>
            <p>AWS SERVICES</p>
          </div>
          <div className='certificate-info'>
            <p>CERTIFICATE</p>
            <p>IELTS 6.</p>
          </div>
          <div className='other-info'>
            <p>INTERESTS</p>
            <p>FOOTBALL</p>
            <p>VIDEO GAME</p>
          </div>
        </div>
      </div>
      <div className='profile-detail'>
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
  );
}

export default App;