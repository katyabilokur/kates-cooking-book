function Button({ dispatch, onButtonClick, type, children }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        onButtonClick();
        dispatch({ type: type });
      }}
    >
      {children}
    </button>
  );
}

export default Button;
