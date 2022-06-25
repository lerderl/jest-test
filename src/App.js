// import logo from './logo.svg';
import './App.css';
import { NameForm } from './Form';

function App() {
  return (
    <div>
      <NameForm />
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" name="fname" data-testid='first-name-input' />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" name="lname" data-testid='last-name-input' />
        <br />
        <input type="submit" value ='Submit'/>
      </form>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
