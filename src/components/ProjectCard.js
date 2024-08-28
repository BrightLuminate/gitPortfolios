import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={project.image} alt={project.title} className="project-card-image" />
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      {/* 버튼을 제거하거나 유지할 수 있지만, 이제 카드 전체가 클릭 가능해집니다. */}
    </div>
  );
};

export default ProjectCard;