import React from "react";

const MyCv = () => {
  return (
    <div id="divToPrint">
      <div className="base">
        <div className="profile">
          <div className="photo">
            <img src="{catImage}" alt="profile-pic" className="profile" />
          </div>
          <div className="info">
            <h3>Tran Anh Hoan</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="about">
          <h3>About me</h3>
          <p>
            I'm a self-driven and self-motivated person with well communication,
            quick learner and be interested in researching new things and also a
            passionate software engineer with roughly two - year experience in
            software development that mainly focus on React JS.
          </p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="home"><i className="fa fa-home"></i> <span>Da Nang</span></div>
          <div className="phone"><i className="fa fa-phone"></i>0393 999 682</div>
          <div className="birthday">
            <i className="fa fa-birthday-cake"></i>01/08/1997
          </div>
          <div className="email">
            <i className="fa fa-envelope"></i>anhhoan1897@gmail.com
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
  )
}

export default MyCv