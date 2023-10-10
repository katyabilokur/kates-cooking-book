import { ReactComponent as HappySvg } from "../assets/icons/happy.svg";

function FinishScreen({ title, dispatch, totalCookTime }) {
  return (
    <>
      <div className="icon-finish-block">
        <HappySvg className="icon-finish" />
      </div>
      <h3>
        <span className="header-dark">
          Congratulations! You cooked delicious
        </span>{" "}
        {title}! <span className="header-dark"> just in {totalCookTime}</span>
      </h3>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reload" })}
      >
        Look for another recipe
      </button>
    </>
  );
}

export default FinishScreen;
