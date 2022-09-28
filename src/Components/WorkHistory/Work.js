import React, { useState } from 'react';
import SectionHeading from '../../SectionHeading';
import OpenModelBtn from '../Buttons/OpenModelBtn';
import WorkExperienceForm from './WorkExperienceForm';
import DisplayWorkExp from './DisplayWorkExp';

function Work() {
  const [displayForm, setDisplay] = useState(false);
  let [workExp, addWorkExp] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveWork = (workInfo) => {
    const newWorkExp = [...workExp, workInfo];
    addWorkExp(newWorkExp);
    handleDisplay();
  };

  const deleteHist = (id) => {
    const newWorkExp = [...workExp];
    newWorkExp.splice(id, 1);
    addWorkExp(newWorkExp);
  };

  return (
    <>
      <SectionHeading title="Work Experience" />
      
      {workExp.map((workHist) => (
        <DisplayWorkExp
          workHist={workHist}
          key={workHist.id}
          deleteHist={deleteHist}
        />
      ))}
      <WorkExperienceForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveWork={saveWork}
      />
      <OpenModelBtn title="Work Experience" handleDisplay={handleDisplay} />
    </>
  );
}

export default Work;