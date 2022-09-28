import React from 'react';

function OpenModelBtn(props) {
  return (
    <div className="model-btn-container">
      <button className="open-model-btn" onClick={props.handleDisplay}>+ Add {props.title}</button>
    </div>
  );
}

export default OpenModelBtn;