import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page01 from './components/Page01';
import Page02 from './components/Page02';
import Page03 from './components/Page03';
import Page04 from './components/Page04';
import Page05 from './components/Page05';
import LandForm from './components/LandForm';

import './index.css';

const App = () => {
        const [rValue, setrValue] = useState(Math.random());
        const [isPrinting, setIsPrinting] = useState(false);

        const [formData, setFormData] = useState({});

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

        const handleFormUpdate = (data) => {
            setFormData(data);
        };

        return (<>
          <div style={{ display: 'flex' }}>
            {!window.matchMedia('print').matches && (
              <div style={{ marginRight: '20px' }}>
                <LandForm onUpdate={handleFormUpdate} />
              </div>
            )}
            <div style={{ flex: 1 }}>
              <Page01 formData={formData} />
              <Page02 formData={formData} />
              <Page03 formData={formData} />
              <Page04 formData={formData} />
              <Page05 formData={formData} />
            </div>
        
            
          </div>
          {!isPrinting && (
              <div className="text-center">
                <button className="btn btn-primary" onClick={handlePrint} style={{ margin: '20px 15px' }}>
                  Save as PDF
                </button>
                <button className="btn btn-primary" onClick={handleDocx}>
                  Save as Docx
                </button>
              </div>
            )}</>
        );
        };

        export default App;