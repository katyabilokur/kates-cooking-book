function PreviousButton({ dispatch, onButtonClick }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        onButtonClick();
        dispatch({ type: "previousStep" });
      }}
    >
      Previous
    </button>
  );
}

export default PreviousButton;
