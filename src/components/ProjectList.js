import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import '../css/ProjectList.css';
import profileImg from '../images/profile.png';
import smartImg from '../images/SMART.png';
import profilesImg from '../images/profiles.png';
import kotocImg from '../images/kotoc.png';
import videoprofileImg from '../images/videoprofile.png';
import todolistImg from '../images/todolist.png';

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: '개인 포토폴리오', description: 'React HTML JavaScript CSS', image: profileImg },
    { id: 2, title: '스마트 팩토리 AI ', description: 'Django HTML JavaScript CSS ROS ', image: smartImg },
    { id: 3, title: '프레임러 모션을 사용한 포트폴리오 ', description: 'React HTML JavaScript CSS', image: profilesImg },
    { id: 4, title: '강아지와 관련된 메신저  ', description: 'Flask HTML CSS JavaScript ', image: kotocImg },
    { id: 5, title: '작품 소개 제작 ', description: 'Flask HTML CSS JavaScript  ', image: videoprofileImg },
    { id: 6, title: ' 할 일 목록 제작 ', description: 'HTML JavaScript CSS', image: todolistImg },
  ];

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} onClick={() => openProjectDetail(project)}>
          <ProjectCard project={project} />
        </div>
      ))}
      {selectedProject && (
        <div className="modal" onClick={closeProjectDetail}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ProjectDetail project={selectedProject} />
            <button className="close-button" onClick={closeProjectDetail}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
