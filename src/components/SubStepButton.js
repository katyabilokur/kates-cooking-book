import { useState } from "react";
import { ReactComponent as CheckSvg } from "../assets/icons/check.svg";

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
      <span className="sub-step-content">
        {subStep}
        {done && <CheckSvg className="icon icon-check" />}
      </span>
    </button>
  );
}

export default SubStepButton;
