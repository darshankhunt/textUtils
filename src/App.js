import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode, SetMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Darkmode';
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 1500);
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Lightmode';
    }
  }

  return (
    <>
    {/* <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
      </Routes>
      </div>
    </Router> */}

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>


    </>
  );
}

export default App;
