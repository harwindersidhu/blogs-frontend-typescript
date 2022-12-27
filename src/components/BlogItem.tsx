import React from "react";

interface BlogItemProps {
  title: string;
  image: string;
  date: string;
  navigateToBlog(): void;
}

const changeDateFormat = (dateProp: string): string => {
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
  const date = new Date(dateProp);
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  return `Published on ${day} ${monthName}, ${year}`;
};

const BlogItem = (props: BlogItemProps) => {
  const dateString = changeDateFormat(props.date);

  return (
    <div className="blog-item" onClick={props.navigateToBlog}>
      <span className="blog-title">{props.title}</span>
      <img src={props.image} alt="" />
      <p>{dateString}</p>
    </div>
  );
};

export default BlogItem;
