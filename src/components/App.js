import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartCooking from "./StartCooking";
import Step from "./Step";
import RecipePreparation from "./RecipePreparation";
import Progress from "./Progress";

import { getTotalTime } from "../helpers/timeConverter";

import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...inicialState, recipes: action.payload, status: "ready" };
    case "dataLoadFailed":
      return { ...state, status: "error" };
    case "preparation":
      return {
        ...state,
        status: "preparation",
        recipe: state.recipes.find((r) => r.id === action.payload),
      };
    case "start":
      return {
        ...state,
        status: "cooking",
      };
    case "nextStep":
      return { ...state, stepIndex: state.stepIndex + 1, stepCompleted: false };
    case "finish":
      return { ...state, status: "finihed" };
    case "restart":
      return { ...inicialState, recipes: state.recipes, status: "cooking" };
    case "previousStep":
      return { ...state, stepIndex: state.stepIndex - 1 };
    case "stepComplete":
      return { ...state, stepCompleted: true };
    case "stepIncomplete":
      return { ...state, stepCompleted: false };
    case "reload":
      return { ...inicialState, recipes: state.recipes, status: "ready" };
    default:
      throw new Error("Error. Action is unknown");
  }
}
const inicialState = {
  recipes: [],
  recipe: null,
  status: "loading",
  stepIndex: 0,
  stepCompleted: false,
};

function App() {
  const [{ recipes, status, recipe, stepIndex, stepCompleted }, dispatch] =
    useReducer(reducer, inicialState);

  useEffect(function () {
    fetch("http://localhost:8001/recipes")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataLoadFailed" }));
  }, []);

  return (
    <div className="app">
      <Header dispatch={dispatch} />
      <Main>
        {status === "error" && <Error />}
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <StartCooking dispatch={dispatch} recipes={recipes} />
        )}
        {status === "preparation" && (
          <RecipePreparation dispatch={dispatch} recipe={recipe} />
        )}
        {status === "cooking" && (
          <>
            <h2>{recipe.title}: cooking...</h2>
            <Progress
              numSteps={recipe.steps.length}
              currentStep={stepIndex + 1}
              coockingTime={123}
              totalTime={getTotalTime(recipe.times)}
            />
            <Step
              steps={recipe.steps[stepIndex]}
              dispatch={dispatch}
              stepIndex={stepIndex}
              stepCompleted={stepCompleted}
              stepsNumber={recipe.steps.length - 1}
            />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
