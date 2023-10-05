import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

function BottomPanel({
  dispatch,
  onButtonClick,
  stepCompleted,
  stepIndex,
  stepsNumber,
}) {
  return (
    <div className="buttons-cooking">
      {stepIndex > 0 && stepIndex <= stepsNumber && (
        <PreviousButton dispatch={dispatch} onButtonClick={onButtonClick} />
      )}
      <NextButton
        onButtonClick={onButtonClick}
        dispatch={dispatch}
        stepCompleted={stepCompleted}
        lastStep={stepIndex === stepsNumber}
      />
    </div>
  );
}

export default BottomPanel;
