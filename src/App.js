import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [fullName, setFullName] = useState("")
  
  const showFullName = () => {
    if(firstName !== "" && secondName !== ""){
      setFullName(firstName + " " + secondName)
      setFirstName("")
      setSecondName("")
    }
  }

  return (
    <div className="App">

      <h1>Form App</h1>
        
        <form>

          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          
          <label for="last-name">Last Name:</label>
          <input type="text" id="last-name" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
          
        <div>
          <button type="button" id="submit-button" onClick={showFullName}>Submit</button>
        </div>

        </form>
        
        <h2>Full Name: <br /> {fullName}<span id="full-name"></span></h2>

    </div>
  );
}

export default App;
