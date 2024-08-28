import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Element } from "react-scroll"; 
import ProjectList from './ProjectList';
import profileImage from '../images/dohyeon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBloggerB, faInstagram, faYoutube, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { faBook, faDesktop, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import TxtRotate from "./TxtRotate"; 

import '../css/App.css';  
import '../css/ProjectCard.css';  
import '../css/ProjectList.css';

import BlogList from './BlogList';
import '../css/BlogCard.css';  
import '../css/BlogList.css';

import CertificationsAwardsSection from './CertificationsAwards';
import '../css/CertificationsAwards.css';




function MyComponent() {
  const [activeLink, setActiveLink] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const [githubStats, setGithubStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    contributions: 0,
  });

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  useEffect(() => {
    axios.get("https://api.github.com/users/BrightLuminate")
      .then(response => {
        const { public_repos, followers } = response.data;

        axios.get("https://api.github.com/users/BrightLuminate/repos")
          .then(repoResponse => {
            const stars = repoResponse.data.reduce((totalStars, repo) => totalStars + repo.stargazers_count, 0);

            const contributions = 400; // Example hardcoded contributions data

            setGithubStats({
              repos: public_repos,
              followers: followers,
              stars: stars,
              contributions: contributions,
            });
          });
      })
      .catch(error => {
        console.error("Error fetching GitHub data:", error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const educationSection = document.querySelector('.education-section');
      const projectsSection = document.querySelector('.projects-section');

      if (educationSection && projectsSection) {
        const educationTop = educationSection.getBoundingClientRect().top;
        const projectsBottom = projectsSection.getBoundingClientRect().bottom;

        if (educationTop <= 0 && projectsBottom >= 0) {
          setShowSidebar(true);
        } else {
          setShowSidebar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    statCard: {
      backgroundColor: '#FFFFFF',
      padding: '20px',
      position: 'relative',
      right: '50px',
      top:  '40px',
      margin: '10px',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      flex: 1,
      minWidth: '200px',
    },
    number: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#2979FF',
    },
    label: {
      fontSize: '12px',
      color: '#333',
      marginTop: '10px',
      display: 'block',
    },
  };

  return (
    <div className="main_own">
      <nav className="navbar">
        <div className="container">
          <Link 
            className="navbar-brand"
            to="home-section"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("")}
          >
            <span className="logo-circle">C</span> hoi Dohyun
          </Link>
          <ul id="nav_size" className="navbar-nav">
            {["home", "about", "education", "Work_Experience", "Skills", "projects", "blog", "Certifications_Awards", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  to={`${section}-section`}
                  className={`nav-link ${activeLink === section ? "active" : ""}`}
                  spy={true}
                  smooth={true}
                  duration={100}
                  onClick={() => handleLinkClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Element name="home-section" className="elements js-fullheight home-section">
        <div className="content">
          <span className="subheading">Hello! I AM</span>
          <h1>최도현</h1>
          <h2>
            I'm a&nbsp;
            <span className="txt-rotate">
              <TxtRotate period={2000} rotate={['풀스택 개발자', '스타트업 개발자', '웹 개발자', '6 개월차']} />
            </span>
          </h2>
        </div>
      </Element>

      <Element name="about-section" className="element js-fullheight about-section">
        <div
          className="content"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
            backgroundColor: '#F5F5DC',
            position: 'relative',
            top: '120px',
            
            width: '120vw',
            height: '120vh',
            overflow: 'hidden',
            margin: '0',
          }}
        >
          <div style={{ flex: 1, padding: '120px' }}>
            <span
              className="Subheadings"
              style={{
                display: 'block',
                fontSize: '14px',
                color: '#6a1b9a',
                marginBottom: '10px',
                textAlign: 'left',
              }}
            >
             <p>Full-stack startup web developer <span role="img" aria-label="laptop">💻</span></p>


            </span>
            <div
              className="pro_name"
              style={{ marginBottom: '30px', textAlign: 'left' }}
            >
              <span style={{ fontSize: '55px', fontWeight: 'bold', color: '#4a148c' }}>
                Choi Dohyeon
              </span>
            </div>
            <p style={{ fontSize: '18px', color: '#333333', textAlign: 'left' }}>
              안녕하세요. 풀스택 스타트업 웹 개발자 입니다.
              <br />
              저는 모든 일에 최선을 다하며, 다양한 경험을 통해 지속적으로 성장하는
              것을 중요하게 생각합니다.
              <br />
              새로운 도전과 변화하는 기술 세계에서 배우는 것을 즐기며, 항상 더 나은
              개발자가 되기 위해
              <br />
              노력하고 있습니다.
              소통과 협업은 저의 중요한 가치입니다. 저는 열린 마음으로 팀원들과
              함께 일하며, 
              <br />
              더 나은 세상을 만드는 데 기여하고자 합니다. 사용자 중심의
              솔루션을 제공하고, 혁신적인 기술을 활용해 
              <br />
              새로운 가능성을 발견하는
              일에 열정을 가지고 있습니다.
            </p>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <a href="mailto:grace71934@gmail.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '21px', color: '#333' }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/BrightLuminate" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '21px', color: '#333' }}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://brightluminate.github.io/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '21px', color: '#333' }}>
                <FontAwesomeIcon icon={faBloggerB} />
              </a>
              <a href="https://www.instagram.com/dohyeon428?igsh=MWtjM21nMmg1MDFlcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '21px', color: '#333' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100012920281549" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '21px', color: '#333' }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.notion.so/Home-5c4e32d239ef4206ad17e33e87a051c0" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '21px', color: '#333' }}>
                <FontAwesomeIcon icon={faBook} />
              </a>
              <a href="https://portfolio-lemon-delta-86.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '21px', color: '#333' }}>
                <FontAwesomeIcon icon={faDesktop} />
              </a>
              <a
                href="https://www.youtube.com/@DohyeonChoi"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '15px', fontSize: '21px', color: '#FF0000' }}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <a target="_black" href="https://drive.google.com/file/d/1yCXe1VcmYPXZQvNU7SZgpnzAaC-GbnVq/view?usp=sharing" className="btn btn-primary py-3 px-3"style={{
              display: 'inline-block',
              padding: '12px 18px',
              fontSize: '12px',
              position: 'relative',
              right: '400px',
              top:  '30px ',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#4a148c',
              borderRadius: '30px',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease',
            }}>
              이력서 보기
            </a>
            <div className="stats-section" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <div className="block-18 shadow" style={styles.statCard}>
                <div className="text">
                  <strong className="number" style={styles.number}>
                    <CountUp end={githubStats.repos} duration={2.5} />
                  </strong>
                  <span style={styles.label}>Public Repositories</span>
                </div>
              </div>
              <div className="block-18 shadow" style={styles.statCard}>
                <div className="text">
                  <strong className="number" style={styles.number}>
                    <CountUp end={githubStats.followers} duration={2.5} />
                  </strong>
                  <span style={styles.label}>Followers</span>
                </div>
              </div>
              <div className="block-18 shadow" style={styles.statCard}>
                <div className="text">
                  <strong className="number" style={styles.number}>
                    <CountUp end={githubStats.stars} duration={2.5} />
                  </strong>
                  <span style={styles.label}>Stars</span>
                </div>
              </div>
              <div className="block-18 shadow" style={styles.statCard}>
                <div className="text">
                  <strong className="number" style={styles.number}>
                    <CountUp end={githubStats.contributions} duration={2.5} />
                  </strong>
                  <span style={styles.label}>Contributions in the last year</span>
                </div>
              </div>
            </div>
        
          </div>
          <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
            <img
              src={profileImage}
              alt="dohyeon"
              style={{
                borderRadius: '10%',
                width: '350px',
                height: '400px',
                position: 'relative',
                right:'70px',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </Element>

      <Element name="education-section" className="element js-fullheight education-section">
        <div className="content">
          <div className="container">
            <div className="row">
              {showSidebar && (
                <div className="col-md-3">
                </div>
              )}
              <div className="col-md-9">
                  <h2 className="heading_own">Education</h2>
                  <div className="resume-wrap">
                    <div className="icon_own">
                      <FontAwesomeIcon icon={faSuitcase} /> 
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text_own">
                      <span className="date_own">2015-2024</span>
                      <h2>명지대학교 (한국음악과전공)</h2>
                      <br/>
                      <h2>전주예술고등학교(한국음악과전공)</h2>
                    </div>
                  </div>
                  <h2 className="heading_two">Education</h2>
                  <div className="resume-wrap">
                    <div className="icon_two">
                      <FontAwesomeIcon icon={faSuitcase} /> 
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text_two">
                      <span className="date_two">2021-2024</span>
                      <h2>미래융합교육원</h2>
                      <p>
                        <h2>실무 프로젝트_AI(인공지능) SW 풀스택 개발자 과정</h2>
                        프로그래밍 기초부터 웹 개발, 데이터 과학, 머신러닝, 임베디드 시스템, 클라우드, 안드로이드 앱 개발까지 다양한 기술을 체계적으로 학습하여 실무 능력을 향상시키는 계획입니다.
                      </p>
                      <br/>
                      <h2>전주정보문화산업진흥원</h2>
                      <p>
                        <h2>디지털 영상교육 전문인력 양성과정</h2>
                        디지털 영상 이론과 카메라 촬영 및 조명 기법을 학습하고, Premiere Pro와 Final Cut Pro를 활용한 영상 편집과 After Effects를 이용한 모션 그래픽 기술을 익히는 과정입니다.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="Work_Experience-section" className="element js-fullheight Work_Experience-section">
        <div className="content">
            <h5 className="heading_for">Work Experience</h5>
            <div className="resume-wrap">
                <div className="icon_for">
                    <FontAwesomeIcon icon={faSuitcase} />
                    <span className="flaticon-ideas"></span>
                </div>
                <div className="text_for">
                    <span className="date_two">2024 ~</span>
                    <h2>미정</h2>
                    <p>
                      
                      <br/> 
                      <br/>
                    </p>
                    <span className="date_two">2012-2024</span>
                    <h2>건대병원 약제부</h2>
                    <p>병원 내에서 사용되는 모든 약물의 재고를 관리하고 의사가 처방한 약을 정확하게 환자에게 안전하고 효과적으로 복용할 수 있게 조제하는 일을 했습니다.</p>
                </div>
            </div>
        </div>
      </Element>



      <Element name="Skills-section" className="element js-fullheight Skills-section">
          <div className="content">
            <h5 className="heading_five">Skills</h5>
            
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px', position: "relative", right: "75px", top: "60px",}}>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=BrightLuminate&layout=donut"
                alt="Top BrightLuminate"
                width="390"
                style={{ marginRight: '50px' }} 
              />
              <img
                src="https://github-readme-stats.vercel.app/api?username=BrightLuminate&show_icons=true&theme=radical"
                alt="Top BrightLuminate"
                width="560"
               
              />
            </div>
          </div>
      </Element>


      <Element name="projects-section" className="element js-fullheight projects-section">
        <div className="content">
          <h5 className="heading_six">Projects</h5>
          <ProjectList />
        </div>
      </Element>


      <Element name="blog-section" className="element js-fullheight blog-section">
        <div className="content">
          <h5 className="heading_seven">My Blog</h5>
          <BlogList />
        </div>
      </Element>

      <Element name="Certifications_Awards-section" className="element js-fullheight Certifications_Awards-section">
        <div className="content">
           <h5 className="heading_Ning">AWARD & LICENSE & CERTIFICATE</h5>
           <CertificationsAwardsSection />
        </div>
      </Element>




      <Element name="contact-section" className="element js-fullheight contact-section">
        <footer className="footer-sections">
          <div className="container">
            <div className="navbar-footers">
              <Link 
                className="navbar-brand"
                to="home-section"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("")}
              >
                <span className="logo-circles">Dohyun</span> 
              </Link>
              <ul className="footer-navs">
                {["home", "about", "projects", "Skills", "blog"].map((section) => (
                  <li className="nav-items" key={section}>
                    <Link
                      to={`${section}-section`}
                      className={`nav-links ${activeLink === section ? "active" : ""}`}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => handleLinkClick(section)}
                    >
                      {section.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social-iconsd">
              <a href="mailto:grace71934@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/BrightLuminate" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://brightluminate.github.io/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBloggerB} />
              </a>
              <a href="https://www.instagram.com/dohyeon428" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/@DohyeonChoi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <hr/>
            <p className="footer-copyrights">
              Copyright © Choi Dohyun 2024, All rights reserved
            </p>
          </div>
        </footer>
    </Element>

    </div>
  );
}

export default MyComponent;
