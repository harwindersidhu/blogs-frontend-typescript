import { combineReducers } from "redux";
import { blogsReducer } from "./blogs";
import { countPagesReducer } from "./countPages";
import { Blog } from "../actions";

export interface StoreState {
  blogs: Blog[];
  totalPages: number;
}

export const reducers = combineReducers<StoreState>({
  blogs: blogsReducer,
  totalPages: countPagesReducer
});