import React from 'react';
import './App.css';
import GenInformation from './Components/GenInformation/GenInformation';
import Work from './Components/WorkHistory/Work';
import Education from './Components/Education/Education';
import SavePageBtn from './Components/Buttons/SavePageBtn';

function App() {
  return (
    <div className="app">
      <div className="save-cv-container">
        <SavePageBtn />
      </div>
      <div className="gen-info-section">
        <GenInformation />
      </div>
      <div className="work-section">
        <Work />
      </div>
      <div className="education-section">
        <Education />
      </div>
    </div>
  );
}

export default App;