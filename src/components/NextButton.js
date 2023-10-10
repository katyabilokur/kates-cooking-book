function NextButton({ dispatch, stepCompleted, lastStep, onButtonClick }) {
  // if (!stepCompleted) return null;
  if (lastStep)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          onButtonClick();
          dispatch({ type: "finish" });
        }}
        disabled={!stepCompleted}
      >
        Finish
      </button>
    );

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        onButtonClick();
        dispatch({ type: "nextStep" });
      }}
      disabled={!stepCompleted}
    >
      Next
    </button>
  );
}

export default NextButton;
