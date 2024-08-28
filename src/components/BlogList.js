import React, { useState } from 'react';
import BlogCard from './BlogCard'; 
import BlogDetail from './BlogDetail';
import '../css/BlogList.css';
import gitblogImg from '../images/gitblog.png';
import notionImg from '../images/notion.png';
import tistoryImg from '../images/tistory.jpeg';




const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const projects = [
    { id: 1, title: '깃허브 블로그', description: '블로그에 오신걸 환영합니다', image: gitblogImg },
    { id: 2, title: '노션 블로그 ', description: '블로그에 오신걸 환영합니다', image: notionImg },
    { id: 3, title: '티스토리 블로그', description: '블로그에 오신걸 환영합니다.', image: tistoryImg },
  ];

  const openProjectDetail = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogDetail = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-list">
      {projects.map((blog) => (
        <div key={blog.id} onClick={() => openProjectDetail(blog)}>
          <BlogCard blog={blog} />  {/* Changed prop name from 'project' to 'blog' */}
        </div>
      ))}
      {selectedBlog && (
        <div className="modal" onClick={closeBlogDetail}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <BlogDetail project={selectedBlog} />
            <button className="close-button" onClick={closeBlogDetail}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
