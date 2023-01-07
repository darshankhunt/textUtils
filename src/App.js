import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, SetMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode}></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
