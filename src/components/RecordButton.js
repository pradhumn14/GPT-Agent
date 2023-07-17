import React from "react";

const RecordButton = (props) => {


  return (
    <>
      <button
        id="recordBtn"
        type="button"
        className="btn btn-warning"
        onClick={props.name}
      >
        Record
      </button>
    </>
  );
};

// export { transcript, printText, RecordButton}
export default RecordButton