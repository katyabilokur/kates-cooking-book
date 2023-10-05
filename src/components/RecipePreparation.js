import IngedientList from "./IngedientList";
import CookingTime from "./CookingTime";
function RecipePreparation({ dispatch, recipe }) {
  return (
    <div>
      <h2>{recipe.title}: preparation</h2>
      <h4>{recipe.description}</h4>
      <div className="time-block">
        {" "}
        {recipe.times.map((time) => (
          <CookingTime time={time} key={time.type} />
        ))}
      </div>

      {recipe.ingredients.map((ingedientSet) => (
        <IngedientList ingedientSet={ingedientSet} key={ingedientSet.type} />
      ))}
      <div className="buttons-preparation">
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
