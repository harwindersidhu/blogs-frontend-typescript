import { Blog, FetchBlogssAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const blogsReducer = (state: Blog[] = [], action: FetchBlogssAction) => {
  switch (action.type) {
    case ActionTypes.fetchBlogs:
      return action.payload;
    default:
      return state;
  }
}