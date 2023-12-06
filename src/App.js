import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page01 from './components/Page01';
import Page02 from './components/Page02';
import Page03 from './components/Page03';
import Page04 from './components/Page04';
import Page05 from './components/Page05';
 
import './index.css'



const App = () => {
  const [rValue, setrValue] = useState(Math.random());
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('print');
    const handleMediaChange = (event) => {
      setIsPrinting(event.matches);
    };

    mediaQueryList.addListener(handleMediaChange);

    return () => {
      mediaQueryList.removeListener(handleMediaChange);
    };
  }, []);

  const handlePrint = () => {
    setrValue(Math.random());
    setTimeout(() => {
      window.print();
    }, 800);
  };
  const handleDocx = () => {
   
  };

  
  return (
    <>
     
 
      <Page01 />

      <Page02 />

      <Page03 />
      <Page04 />
      <Page05/>
      {!isPrinting && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handlePrint}>
            Save as PDF
          </button>
          <button className="btn btn-primary" onClick={handleDocx}>
            Save as Docx
          </button>
        </div>
      )}
    </>
  );
};

export default App;
