import SubStepButton from "./SubStepButton";

function SubSteps({ steps, onStepsDone }) {
  return (
    <div className="options">
      {steps.map((step) => (
        <SubStepButton subStep={step} key={step} onStepsDone={onStepsDone} />
      ))}
    </div>
  );
}

export default SubSteps;
