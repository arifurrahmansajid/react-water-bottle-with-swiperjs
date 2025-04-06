import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handelBookMark,handelMarkTime }) => {
  const { title, author, cover, hashtag,reading_time, id } = blog;
  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-6">
      <figure>
        <img src={cover} alt="Blogs" />
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between">
          <h4 className="font-bold">{author}</h4>
          <FaBookmark onClick={() =>handelBookMark(blog)} size={24} />
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          {hashtag.map((has) => (
            <p>{has}</p>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button onClick={() =>handelMarkTime(reading_time,id)} className="btn btn-primary">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
