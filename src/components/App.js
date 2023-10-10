import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartCooking from "./StartCooking";
import Step from "./Step";
import RecipePreparation from "./RecipePreparation";
import Progress from "./Progress";

import { getTotalTime, timeConverter } from "../helpers/timeConverter";

import { useEffect, useReducer } from "react";
import FinishScreen from "./FinishScreen";

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
        recipe:
          state.recipe === null
            ? state.recipes.find((r) => r.id === action.payload)
            : state.recipe,
      };
    case "start":
      return {
        ...state,
        status: "cooking",
      };
    case "nextStep":
      return { ...state, stepIndex: state.stepIndex + 1, stepCompleted: false };
    case "finish":
      return {
        ...state,
        status: "finihed",
        totalCookTime: state.secondsInProgress,
        secondsInProgress: 0,
      };
    case "restart":
      return { ...inicialState, recipes: state.recipes, status: "cooking" };
    case "previousStep":
      return { ...state, stepIndex: state.stepIndex - 1 };
    case "stepComplete":
      return { ...state, stepCompleted: true };
    case "stepIncomplete":
      return { ...state, stepCompleted: false };
    case "reload":
      return {
        ...inicialState,
        recipes: state.recipes,
        status: "ready",
        secondsInProgress: 0,
      };
    case "tick":
      return {
        ...state,
        secondsInProgress: state.secondsInProgress + 1,
      };
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
  secondsInProgress: 0,
  totalCookTime: 0,
};

function App() {
  const [
    {
      recipes,
      status,
      recipe,
      stepIndex,
      stepCompleted,
      secondsInProgress,
      totalCookTime,
    },
    dispatch,
  ] = useReducer(reducer, inicialState);

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
            <h2>
              {recipe.title}: <span className="header-dark">cooking...</span>
            </h2>
            <Progress
              numSteps={recipe.steps.length}
              currentStep={stepIndex + 1}
              dispatch={dispatch}
              totalTime={getTotalTime(recipe.times)}
              secondsInProgress={secondsInProgress}
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
        {status === "finihed" && (
          <FinishScreen
            dispatch={dispatch}
            title={recipe.title}
            totalCookTime={timeConverter(totalCookTime)}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
