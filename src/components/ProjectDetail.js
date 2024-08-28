import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import '../css/ProjectDetail.css';
import profileImg from '../images/profile.png';
import smartImg from '../images/SMART.png';
import profilesImg from '../images/profiles.png';
import kotocImg from '../images/kotoc.png';
import videoprofileImg from '../images/videoprofile.png';
import todolistImg from '../images/todolist.png';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = getProjectById(id);

  const handleClose = () => {
    navigate('/'); // 홈으로 돌아가기
    setTimeout(() => {
      scroller.scrollTo('projects-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }, 100); // 약간의 딜레이 후 스크롤
  };

  return (
    <div className="project-detail">
      <h1 className="project-detail-title">{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <div className="project-detail-content">
        <p>{project.description}</p>
        <p>프로젝트 기간: {project.period}</p>
        <p>목표: {project.goal}</p>
        <p>구성원: {project.team}</p>
        <p>프로젝트 진행 과정:</p>
        <ul>
          {project.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <p>담당업무:</p>
        <ul>
          {project.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </div>
      <button onClick={handleClose} className="exit-button">
        나가기
      </button>
    </div>
  );
};

// 가상의 프로젝트 데이터를 가져오는 함수 (실제 데이터로 대체해야 합니다)
const getProjectById = (id) => {
  const projects = [
    {
      id: 1,
      title: '개인 포토폴리오',
      description: 'React HTML JavaScript CSS',
      image: profileImg,
      period: '2024.08.19~2024.08.30',
      goal: '리엑트를 이용해 포트폴리오를 한 페이지 내에서 부드럽게 스크롤하면서 각 섹션 보여주면서 볼 수 있는 형식으로 제작되며 싱글 페이지 애플리케이션 구현.',
      team: '1명',
      steps: [
        '프로젝트 설계 및 기획',
        '기술 스택 결정 및 컴포넌트 개발',
        '페이지 전환 효과 구현',
        '모바일 최적화',
        '통계 및 정보 시각화',
        '테스트 및 배포',
      ],
      tasks: [
        '기획 및 설계: 웹사이트 구조와 디자인을 설계.',
        'React 프론트엔드 개발: 주요 컴포넌트들을 개발하고 페이지 전환 효과 구현.',
        '반응형 디자인: 다양한 디바이스에 맞춘 반응형 디자인 적용.',
        '테스트 및 디버깅: 철저한 테스트와 디버깅 수행.',
        '최종 배포: 프로젝트 배포 및 실사용자 접근 환경 구축.',
      ],
      link: 'https://github.com/BrightLuminate/gitPortfolios.git',
    },
    {
      id: 2,
      title: '스마트 팩토리 AI',
      description: '제조 공정과 품질 검사에 필요한 시스템 개발',
      image: smartImg,
      period: '2024.06.27~2024.08.20',
      goal: '복잡한 공장과 창고에서 로봇이 물류를 자동으로 운반하고 기반 AI 품질 검사를 통해 임무를 정확히 수행하는 기능.',
      team: '5명',
      steps: [
        '초기 계획: 프로젝트 주제 선정 및 기획 단계.',
        'ROS 개발: QR 모듈 테스트, 코드 생성, 라인 색깔 트레이싱, 장애물 탐지 기능 개발.',
        '백엔드 개발: DB 설계, MySQL, AWS와 연결, Django REST API 구축.',
        'AI 및 머신 러닝: 데이터 수집, 모델 학습 및 품질 불량 모델링 수행.',
        '프론트엔드 개발: UX/UI 디자인, ROS/DB 연계 작업.',
        '프로젝트 결론: 최종 보고서 작성 및 프레젠테이션 준비.',
      ],
      tasks: [
        'DB 설계',
        '관제 서버 구축',
        'API 백엔드 운영 및 AWS S3 연결 작업',
        'DB와 프론트엔드 간 양방향 통신 구현',
        'REST API를 통한 데이터 뷰 및 그래프 개발',
        '품질 관리 지표 계산 구현 및 데이터베이스 저장',
      ],
      link: 'https://github.com/BrightLuminate/myproject.git',
    },
    {
      id: 3,
      title: '프레임러 모션을 사용한 포트폴리오',
      description: 'React HTML JavaScript CSS',
      image: profilesImg,
      period: '2024.05.25~2024.06.01',
      goal: '리액트를 이용해 사용자 친화적이고 직관적인 포트폴리오 웹사이트를 개발하는 것.',
      team: '1명',
      steps: [
        '설계 및 기획: 사용자 경험을 고려하여 각 페이지의 구성 요소와 전환 효과를 기획.',
        '컴포넌트 개발: React의 컴포넌트 기반 구조를 활용하여 재사용 가능한 컴포넌트 개발.',
        '페이지 전환 효과: PageTransition 및 StairTransition 컴포넌트를 통해 시각적 피드백 제공.',
        '모바일 최적화: MobileNav 컴포넌트를 통해 네비게이션 편의성 증대.',
        '통계 및 정보 시각화: Stats 컴포넌트를 사용하여 주요 통계 정보를 시각적으로 표현.',
        '테스트 및 배포: 모든 기능이 원활히 동작하는지 테스트하고 배포.',
      ],
      tasks: [
        '기획 및 설계: 웹사이트 구조와 디자인을 설계.',
        'React 프론트엔드 개발: 주요 컴포넌트들을 개발하고 페이지 전환 효과를 구현.',
        '반응형 디자인: 다양한 디바이스에 맞춘 반응형 디자인을 적용.',
        '테스트 및 디버깅: 웹사이트의 안정성을 위해 테스트와 디버깅을 수행.',
        '최종 배포: 프로젝트를 배포하여 실사용자가 접근할 수 있는 환경을 구축.',
      ],
      link: 'https://github.com/BrightLuminate/portfolio.git',
    },
    {
      id: 4,
      title: 'Flask를 이용한 강아지와 관련된 포트폴리오 메신저',
      description: 'Flask HTML CSS JavaScript',
      image: kotocImg,
      period: '2024.0613~2024.06.20',
      goal: '강아지의 관련 메신저 로그인 회원가입 비밀번호찾기 회원목록 이용한 카톡 메신저로 다양한 강아지 친구와 대화할 수 있는 시스템 구축.',
      team: '1명',
      steps: [
        'Flask를 이용한 웹페이지 생성.',
        '콘텐츠 및 디자인 요구 파악.',
        '웹 사이트 구조 기획.',
        'UI/UX 디자인 최적화.',
        '프론트엔드 및 백엔드 개발.',
        '웹 사이트 테스트 및 버그 수정.',
      ],
      tasks: [
        '프로젝트 기획 및 일정 조율.',
        'UI/UX 디자인 및 웹 사이트 구조 기획.',
        '프론트엔드 및 백엔드 개발.',
        '테스트 및 버그 수정.',
        '로그인, 회원가입, 회원목록, 비밀번호찾기, 친구목록, 채팅창 기능 구현.',
      ],
      link: 'https://github.com/BrightLuminate/Messaging.git',
    },
    {
      id: 5,
      title: 'Flask를 이용한 가상환경 통해 작품 소개 제작',
      description: 'Flask HTML CSS JavaScript',
      image: videoprofileImg,
      period: '2024.04.26~2024.05.11',
      goal: '웹 기술을 사용해 영상 포트폴리오 웹사이트를 개발하여 작품을 효과적으로 소개하는 페이지 구축.',
      team: '1명',
      steps: [
        'Flask를 이용한 웹페이지 생성.',
        '콘텐츠 및 디자인 요구 파악.',
        '웹 사이트 구조 기획.',
        'UI/UX 디자인 최적화.',
        '영상 편집 및 이미지 디자인.',
        '프론트엔드 및 백엔드 개발.',
        'HTML, CSS, JavaScript를 활용한 프론트엔드 구현.',
        'Flask 프레임워크를 활용한 백엔드 개발.',
        '웹 사이트 테스트 및 버그 수정.',
      ],
      tasks: [
        '프로젝트 기획 및 일정 조율.',
        'UI/UX 디자인 및 웹 사이트 구조 기획.',
        '영상 및 이미지 콘텐츠 제작.',
        '프론트엔드 및 백엔드 개발.',
        '테스트 및 버그 수정.',
        '로그인, 로그아웃 기능 구현.',
      ],
      link: 'https://github.com/BrightLuminate/project',
      video: 'https://www.youtube.com/watch?v=zoWWDhaqaII',
    },
    {
      id: 6,
      title: 'HTML, CSS, JavaScipt를 이용한 할 일 목록 제작',
      description: 'HTML CSS JavaScript',
      image: todolistImg,
      period: '2024.04.01~2024.04.30',
      goal: '사용자가 할 일을 효과적으로 관리하고 추적할 수 있는 웹 어플리케이션을 제공하는 것.',
      team: '1명',
      steps: [
        '요구사항 분석: 사용자가 어떻게 할 일을 관리하고 싶어하는지 이해하고 필요한 기능을 정의.',
        '설계: UI/UX 디자인을 고려하여 어플리케이션의 구조를 설계.',
        '개발: HTML, CSS, JavaScript를 사용하여 TaskMaster의 프론트엔드 개발.',
        '테스트: 다양한 시나리오에 대해 어플리케이션을 테스트하여 버그를 식별하고 수정.',
      ],
      tasks: [
        '요구사항 분석: 사용자의 요구사항을 수집하고 문서화.',
        'UI/UX 디자인: 사용자 친화적인 디자인을 고려하여 어플리케이션의 UI 설계.',
        '프론트엔드 개발: HTML, CSS, JavaScript를 사용하여 TaskMaster의 프론트엔드 개발 및 테스트.',
        '버그 수정: 테스트 중 발견된 버그를 식별하고 수정하여 어플리케이션의 안정성을 향상.',
      ],
      link: 'https://github.com/BrightLuminate/todolist',
    },
  ];

  return projects.find((project) => project.id === parseInt(id));
};

export default ProjectDetail;
