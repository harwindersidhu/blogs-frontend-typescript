import { combineReducers } from "redux";
import { blogsReducer } from "./blogs";
import { Blog } from "../actions";

export interface StoreState {
  blogs: Blog[];
}

export const reducers = combineReducers<StoreState>({
  blogs: blogsReducer
});