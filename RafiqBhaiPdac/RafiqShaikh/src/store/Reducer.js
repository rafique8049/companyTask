import axios from "axios";
import { useDispatch } from "react-redux";
// const dispatch = useDispatch();

export const Reducer = (state = { useData: [] }, action) => {
  if (action.type === "ADD_USER") {
    return {
      ...state,
      useData: { ...action.data },
    }
    };
  

  return state;
};
