function FinishScreen({ dispatch }) {
  return (
    <>
      <p>Congratulations! You cooked it!</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Look for another recipe
      </button>
    </>
  );
}

export default FinishScreen;
