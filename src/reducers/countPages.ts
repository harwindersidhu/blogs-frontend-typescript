import { CountPagesAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const countPagesReducer = (state: number = 1, action: CountPagesAction) => {
  switch (action.type) {
    case ActionTypes.countPages:
      return action.payload;
    default:
      return state;
  }
}