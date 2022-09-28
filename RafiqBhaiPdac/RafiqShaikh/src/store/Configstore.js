import { createStore, combineReducers } from "redux";
import { Reducer } from "./Reducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({
      Reducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
