import logo from './logo.svg';
import './App.css';

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

      <div className='profile-header'>
        <img src='./images/cat_logo.jpg' alt='profile-pic' className='profile' />
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
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;