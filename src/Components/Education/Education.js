import React, { useState } from 'react';
import SectionHeading from '../../SectionHeading';
import OpenModelBtn from '../Buttons/OpenModelBtn';
import EduHist from './EduHist';
import DisplayEducation from './DisplayEducation';

function Education() {
  const [displayForm, setDisplay] = useState(false);
  let [edu, addEduInfo] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveEdu = (eduInfo) => {
    const newEduInfo = [...edu, eduInfo];
    addEduInfo(newEduInfo);
    handleDisplay();
  };

  const deleteEdu = (id) => {
    const newEduInfo = [...edu];
    newEduInfo.splice(id, 1);
    addEduInfo(newEduInfo);
  };

  return (
    <>
      <SectionHeading title="Education" />

      {edu.map((eduHist) => (
        <DisplayEdu eduHist={eduHist} key={eduHist.id} deleteEdu={deleteEdu} />
      ))}
      <EduExpForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveEdu={saveEdu}
      />
      <OpenModelBtn title="Education" handleDisplay={handleDisplay} />
    </>
  );
}

export default Education;