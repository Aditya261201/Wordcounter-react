import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  const [mode, setDarkMode] = useState('light'); // tells whether dark mode is on or off.
  const [modetext, changeModeText] = useState("Darkmode");
  const [alert, setAlert] = useState(null);
  // const [theme,setTheme]=useState('default');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark')
      changeModeText('Lightmode');
      document.body.style.backgroundColor = 'grey'
      showAlert('Darkmode has been enabled', 'Success');
    }
    else {
      setDarkMode('light')
      changeModeText('Darkmode');
      document.body.style.backgroundColor = 'white'
      showAlert('Darkmode has been disabled', 'Success');
    }
  }

  const setTheme = () => {
    if (document.getElementById('secondary-outlined').checked === true) {
      document.body.style.color='black';
      document.getElementById('textbox').style.border= '2px solid black';
      // document.getElementById('headingOne').style.border= '2px solid black';
      // document.getElementById('headingTwo').style.border= '2px solid black';
      // document.getElementById('headingThree').style.border= '2px solid black';
    } 
    else if (document.getElementById('success-outlined').checked === true) {
      document.body.style.color='green';
      document.getElementById('textbox').style.border= '2px solid green';
      // document.getElementById('headingOne').style.border= '2px solid green';
      // document.getElementById('headingTwo').style.border= '2px solid green';
      // document.getElementById('headingThree').style.border= '2px solid green';
    }
    else {
      document.body.style.color='red';
      document.getElementById('textbox').style.border= '2px solid red';
      // document.getElementById('headingOne').style.border= '2px solid red';
      // document.getElementById('headingTwo').style.border= '2px solid red';
      // document.getElementById('headingThree').style.border= '2px solid red'; 
    }
  }

  return (
    <>
    <BrowserRouter>
      {/* here navbar is a component and title is a prop which is passed in it.  */}
      <Navbar title="aadi" mode={mode} setTheme={setTheme} toggleMode={toggleMode} modetext={modetext} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} setTheme={setTheme}/>}/>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Word Counter | Character counter | Uppercase to lowercase | LowerCase to uppercase" mode={mode} />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
