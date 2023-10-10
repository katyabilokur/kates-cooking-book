import NextButton from "./NextButton";
import Button from "./Button";

function BottomPanel({
  dispatch,
  onButtonClick,
  stepCompleted,
  stepIndex,
  stepsNumber,
}) {
  return (
    <div className="buttons-cooking buttons-panel">
      {stepIndex > 0 && stepIndex <= stepsNumber && (
        <Button
          dispatch={dispatch}
          onButtonClick={onButtonClick}
          type={"previousStep"}
        >
          Previous
        </Button>
      )}
      {stepIndex === 0 && (
        <Button
          dispatch={dispatch}
          onButtonClick={onButtonClick}
          type={"preparation"}
        >
          Back
        </Button>
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
