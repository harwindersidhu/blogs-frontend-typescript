import React from "react";

interface BlogItemProps {
  title: string;
  image: string;
  date: string;
}

const BlogItem = (props: BlogItemProps) => {
  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(props.date);
  const day = date.getDate();
  const month = months[date.getMonth() - 1];
  const year = date.getFullYear();
  const dateString = `Published on ${day} ${month}, ${year}`;

  return (
    <div className="blog-item">
      <span className="blog-title">{props.title}</span>
      <img src={props.image} alt="" />
      <p>{dateString}</p>
    </div>
  );
};

export default BlogItem;
