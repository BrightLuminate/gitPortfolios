import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BlogCard.css';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Blog/${blog.id}`);
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <img src={blog.image} alt={blog.title} className="blog-card-image" />
      <h3 className="blog-card-title">{blog.title}</h3>
      <p className="blog-card-description">{blog.description}</p>
   
    </div>
  );
};

export default BlogCard;