import IngedientList from "./IngedientList";
import CookingTime from "./CookingTime";
import { ReactComponent as ClockSvg } from "../assets/icons/clock.svg";
import { ReactComponent as IngredientsSvg } from "../assets/icons/ingredients.svg";

function RecipePreparation({ dispatch, recipe }) {
  return (
    <div>
      <h2>
        {recipe.title}: <span className="header-dark">preparation...</span>
      </h2>
      <h4>{recipe.description}</h4>
      <div className="icon-header">
        <ClockSvg className="icon" />
        <h5> Cooking times</h5>
      </div>

      <div className="time-block">
        {" "}
        {recipe.times.map((time) => (
          <CookingTime time={time} key={time.type} />
        ))}
      </div>

      <div className="icon-header">
        <IngredientsSvg className="icon" />
        <h5> Ingredients</h5>
      </div>

      {recipe.ingredients.map((ingedientSet) => (
        <IngedientList ingedientSet={ingedientSet} key={ingedientSet.type} />
      ))}
      <div className="buttons-panel">
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "reload" })}
        >
          Back
        </button>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start" })}
        >
          Start cooking
        </button>
      </div>
    </div>
  );
}

export default RecipePreparation;
