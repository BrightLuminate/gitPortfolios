import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import '../css/BlogDetail.css';
import gitblogImg from '../images/gitblog.png';
import notionImg from '../images/notion.png';
import tistoryImg from '../images/tistory.jpeg';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = getBlogById(id);

  const handleClose = () => {
    navigate('/'); // 홈으로 돌아가기
    setTimeout(() => {
      scroller.scrollTo('blog-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }, 100); // 약간의 딜레이 후 스크롤
  };

  if (!blog) {
    return (
      <div className="blog-detail">
        <h1 className="blog-detail-title">Blog not found</h1>
        <button onClick={handleClose} className="exit-button">
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <h1 className="blog-detail-title">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <div className="blog-detail-content">
        <p>{blog.description}</p>
        <p>새로운 시작: {blog.period}</p>
        <p>목표:  {blog.goal}</p>
        <p>소개글:</p>
        <ul>
          {blog.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
       
        <p>
          <a href={blog.link} target="_blank" rel="noopener noreferrer">
            GitHub Repository Link
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
const getBlogById = (id) => {
  const blog = [
    {
      id: 1,
      title: '깃혀브 블로그',
      description: '노션 블로그의 오신걸 환영합니다. 저의 블로그는 배우는 걸 기록하고 개발자의 길을 갈때 기록하는 블로그입니다. ',
      image: gitblogImg,
      period: '2024.03.07',

      goal: '기술에 대한 열정으로 가득 찬 개발자입니다. 이 블로그는 제가 그 여정을 기록하고 공유하는 공간입니다.',

      steps: [
        '블로그에서 최신 개발 트렌드, 유용한 코드 프로젝드 경험을 기술 관련 통찰을 나누고 성장 하고 싶습니다.',
        '큰 그릇은 늦게 이루어진다 라는 말을 마음에 새기고 꾸준한 학습과 실전 경험을 통해 더 나은 개발자 되기 위해 노력하고 있습니다. ',
        '져는 새로운 도전을 통해서 얼마나 더 성장하고 싶고 다양한 경험을 접하고 싶습니다. 새로운걸 개발하는 개발자 되고 싶습니다. ',
        '앞으로 다양한 프로젝트를 만들면서 학습 내용을 체계적으로 정리하고 기록하며 꾸준히 학습하는 습관을 만들겠습니다. ',
        '항상 응원해주시면 감사합니다. 교만하지 않고 항상 겸손하는 개발자가 되겠습니다.',
        '앞으로도 끊임없이 작은것도 소중하게 여기면서 도전하고 배우며 더 좋은 코드를 작성하고 효과적인 문제 해결 능력을 갖춘 개발자가 되겠습니다.',
      ],
      link: 'https://brightluminate.github.io/',
    },
    {
      id: 2,
      title: '노션블로그',
      description: '노션 블로그의 오신걸 환영합니다. 저의 블로그는 배우는 걸 기록하고 개발자의 길을 갈때 기록하는 블로그입니다. ',
      image: notionImg,
      period: '2024.03.07~',

      goal: '기술에 대한 열정으로 가득 찬 개발자입니다. 이 블로그는 제가 그 여정을 기록하고 공유하는 공간입니다.',
    
      steps: [
        '블로그에서 최신 개발 트렌드, 유용한 코드 프로젝드 경험을 기술 관련 통찰을 나누고 성장 하고 싶습니다.',
        '큰 그릇은 늦게 이루어진다 라는 말을 마음에 새기고 꾸준한 학습과 실전 경험을 통해 더 나은 개발자 되기 위해 노력하고 있습니다. ',
        '져는 새로운 도전을 통해서 얼마나 더 성장하고 싶고 다양한 경험을 접하고 싶습니다. 새로운걸 개발하는 개발자 되고 싶습니다. ',
        '앞으로 다양한 프로젝트를 만들면서 학습 내용을 체계적으로 정리하고 기록하며 꾸준히 학습하는 습관을 만들겠습니다. ',
        '항상 응원해주시면 감사합니다. 교만하지 않고 항상 겸손하는 개발자가 되겠습니다.',
        '앞으로도 끊임없이 작은것도 소중하게 여기면서 도전하고 배우며 더 좋은 코드를 작성하고 효과적인 문제 해결 능력을 갖춘 개발자가 되겠습니다.',
      ],
      link: 'https://www.notion.so/ea46f43ad90b419e9bde9e6162daba2a',
    },
    {
      id: 3,
      title: '티스토리블로그',
      description: '노션 블로그의 오신걸 환영합니다. 저의 블로그는 배우는 걸 기록하고 개발자의 길을 갈때 기록하는 블로그입니다. ',
      image: tistoryImg,
      period: '2024.03.07~',
      goal: '기술에 대한 열정으로 가득 찬 개발자입니다. 이 블로그는 제가 그 여정을 기록하고 공유하는 공간입니다.',
      steps: [
        '블로그에서 최신 개발 트렌드, 유용한 코드 프로젝드 경험을 기술 관련 통찰을 나누고 성장 하고 싶습니다.',
        '큰 그릇은 늦게 이루어진다 라는 말을 마음에 새기고 꾸준한 학습과 실전 경험을 통해 더 나은 개발자 되기 위해 노력하고 있습니다. ',
        '져는 새로운 도전을 통해서 얼마나 더 성장하고 싶고 다양한 경험을 접하고 싶습니다. 새로운걸 개발하는 개발자 되고 싶습니다. ',
        '앞으로 다양한 프로젝트를 만들면서 학습 내용을 체계적으로 정리하고 기록하며 꾸준히 학습하는 습관을 만들겠습니다. ',
        '항상 응원해주시면 감사합니다. 교만하지 않고 항상 겸손하는 개발자가 되겠습니다.',
        '앞으로도 끊임없이 작은것도 소중하게 여기면서 도전하고 배우며 더 좋은 코드를 작성하고 효과적인 문제 해결 능력을 갖춘 개발자가 되겠습니다.',
      ],
      tasks: [
        '기획 및 설계: 웹사이트 구조와 디자인을 설계.',
        'React 프론트엔드 개발: 주요 컴포넌트들을 개발하고 페이지 전환 효과를 구현.',
        '반응형 디자인: 다양한 디바이스에 맞춘 반응형 디자인을 적용.',
        '테스트 및 디버깅: 웹사이트의 안정성을 위해 테스트와 디버깅을 수행.',
        '최종 배포: 프로젝트를 배포하여 실사용자가 접근할 수 있는 환경을 구축.',
      ],
      link: 'https://blog7021.tistory.com/',
    },
  ];

  return blog.find((Blog) => Blog.id === parseInt(id));
};

export default BlogDetail;
