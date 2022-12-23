import { Blog, GetBlogBySlugAction } from "../actions";
import { ActionTypes } from "../actions/types";

const defaultValue = {
  id : 1,
  title: "",
  slug: "",
  content: "",
  image: "",
  published_at: ""
}

export const selectedBlogReducer = (state: Blog = defaultValue, action: GetBlogBySlugAction) => {
  switch (action.type) {
    case ActionTypes.getBlogBySlug:
      return action.payload;
    default:
      return state;
  }
}