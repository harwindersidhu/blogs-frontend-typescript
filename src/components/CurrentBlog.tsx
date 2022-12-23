import React, { useEffect } from "react";
import { Blog } from "../actions";

interface CurrentBlogProps {
  slug: string;
  getBlog: any;
  blog: Blog;
}

const CurrentBlog = (props: CurrentBlogProps) => {
  useEffect(() => {
    props.getBlog(props.slug);
  }, []);

  return (
    <div className="blog">
      <div dangerouslySetInnerHTML={{ __html: props.blog.content }} />
    </div>
  );
};

export default CurrentBlog;
