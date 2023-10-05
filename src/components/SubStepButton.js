import { useState } from "react";

function SubStepButton({ subStep, onStepsDone }) {
  const [done, setDone] = useState(false);

  function handleClick() {
    onStepsDone(!done);
    setDone(() => !done);
  }
  return (
    <button
      className={`btn btn-option ${done ? "done" : ""}`}
      onClick={handleClick}
    >
      {subStep}
    </button>
  );
}

export default SubStepButton;
