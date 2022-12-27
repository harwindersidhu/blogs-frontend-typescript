import { Blog, GetBlogBySlugAction } from "../actions";
import { ActionTypes } from "../actions/types";

const defaultValue = {
  id : 1,
  title: "",
  slug: "",
  content: "<h2>Unable to find Blog. Please check the slug value again.</h2>",
  image: "",
  published_at: ""
}

export const selectedBlogReducer = (state: Blog = defaultValue, action: GetBlogBySlugAction) => {
  switch (action.type) {
    case ActionTypes.getBlogBySlug:
      return action.payload || defaultValue;
    default:
      return state;
  }
}