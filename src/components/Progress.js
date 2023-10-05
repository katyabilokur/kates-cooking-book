function Progress({ numSteps, currentStep, coockingTime, totalTime }) {
  return (
    <header className="progress">
      <progress max={numSteps} value={currentStep} />
      <p>
        Cooking step {currentStep} / {numSteps}
      </p>
      <p>
        <strong>{coockingTime}</strong> / {totalTime} + chilling time
      </p>
    </header>
  );
}

export default Progress;
