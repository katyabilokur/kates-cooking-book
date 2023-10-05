import SubSteps from "./SubSteps";
import { useEffect, useState } from "react";

import BottomPanel from "./BottomPanel";

function Step({ steps, dispatch, stepIndex, stepCompleted, stepsNumber }) {
  const [numberStepsDone, setNumberStepsDone] = useState(0);

  function handleStepDone(done) {
    const n = done ? 1 : -1;
    setNumberStepsDone((number) => number + n);
  }

  function onButtonClick() {
    setNumberStepsDone(0);
  }

  useEffect(() => {
    if (numberStepsDone === steps.steps.length) {
      dispatch({ type: "stepComplete" });
    } else dispatch({ type: "stepIncomplete" });
  }, [numberStepsDone, dispatch, steps.steps.length]);

  return (
    <div>
      <h4>{steps.description}</h4>
      <SubSteps steps={steps.steps} onStepsDone={handleStepDone} />
      <BottomPanel
        dispatch={dispatch}
        onButtonClick={onButtonClick}
        stepCompleted={stepCompleted}
        stepIndex={stepIndex}
        stepsNumber={stepsNumber}
      />
    </div>
  );
}

export default Step;
