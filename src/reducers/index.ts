import { combineReducers } from "redux";
import { blogsReducer } from "./blogs";
import { countPagesReducer } from "./countPages";
import { selectedBlogReducer } from "./selectedBlog";
import { Blog } from "../actions";

export interface StoreState {
  blogs: Blog[];
  totalPages: number;
  selectedBlog: Blog;
}

export const reducers = combineReducers<StoreState>({
  blogs: blogsReducer,
  totalPages: countPagesReducer,
  selectedBlog: selectedBlogReducer
});