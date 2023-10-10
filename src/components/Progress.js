import { useEffect } from "react";
import { timeConverter } from "../helpers/timeConverter";

function Progress({
  numSteps,
  currentStep,
  totalTime,
  secondsInProgress,
  dispatch,
}) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <header className="progress">
      <progress max={numSteps} value={currentStep} />
      <p>
        Cooking step {currentStep} / {numSteps}
      </p>
      <p>
        <strong>{timeConverter(+secondsInProgress)}</strong> / {totalTime} +
        chilling time
      </p>
    </header>
  );
}

export default Progress;
