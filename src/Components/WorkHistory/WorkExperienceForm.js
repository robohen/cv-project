import React, { useState } from 'react';
import uniqid from 'uniqid';

function WorkExperienceForm(props) {
  const initialState = {
    jobTitle: '',
    employer: '',
    dateWorked: '',
    location: '',
    description: '',
    id: uniqid()
  };

  const [info, setInfo] = useState(initialState);

  const resetState = () => {
    setInfo(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveWork(info);
    resetState();
  };

  if (!props.displayForm) return null;
  return (
    <div className="model-container">
      <form className="model-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="job-input"
            value={info.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employer">Company</label>
          <input
            type="text"
            name="employer"
            id="employer-input"
            value={info.employer}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateWorked">
            Date Worked <span>(MM/YYYY - MM/YYYY)</span>
          </label>
          <input
            type="text"
            name="dateWorked"
            id="date-Input"
            value={info.dateWorked}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            Location <span>(e.g. Los Angeles, CA)</span>
          </label>
          <input
            type="text"
            name="location"
            id="workLocation-input"
            value={info.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="job-desc"
            placeholder="Tasks will re-format into bulletpoints on save"
            value={info.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="model-action-btns">
          <input type="submit" value="Save" className="save-info-btn" />
          <button className="close-form-btn" onClick={props.handleDisplay}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkExperienceForm;