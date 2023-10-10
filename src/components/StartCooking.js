import { useState } from "react";

function StartCooking({ recipes, dispatch }) {
  const [dishType, setDishType] = useState(recipes[0].type);
  const [dish, setDish] = useState(recipes[0]);

  const dishTypes = [...new Set(recipes.map((item) => item.type))];
  const dishes = recipes.filter((item) => item.type === dishType);

  return (
    <div className="start">
      <h2>Welcome to my favourite recipes</h2>
      <h3>{recipes.length} delicious dishes to choose from</h3>

      <div className="recipes-filter">
        <select
          className="select"
          value={dishType}
          onChange={(e) => {
            setDishType(e.target.value);
            setDish(
              recipes.filter((recipe) => recipe.type === e.target.value)[0]
            );
          }}
        >
          {dishTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          className="select"
          value={dish.title}
          onChange={(e) =>
            setDish(recipes.find((r) => r.title === e.target.value))
          }
        >
          {dishes.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "preparation", payload: dish.id })}
      >
        Open recipe
      </button>
    </div>
  );
}

export default StartCooking;
