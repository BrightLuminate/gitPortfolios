import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../css/CertificationsAwards.css';

const certifications  = [
    { icon: faCertificate, title: "컴퓨터활용능력",  description: "1급", organization: "대한상공회의소" },
    { icon: faAward, title: "자동차 운전 면허",  description: "대형면허 1종/소형 2종", organization: "경찰청(운전면허시험관리단)" },
    { icon: faCertificate, title: "실무 프로젝트_AI(인공지능) SW 풀스택 개발자 과정(자바, 파이썬)",  description: "수료증", organization: "미래융합교육원" },
    { icon: faCertificate, title: "정보 문화 산업 디지털 영상 기술 전문 인력",  description: "수료증", organization: "정보 문화산업" },
    { icon: faTrophy, title: "정읍 전국 청소년 국악 경연대회",  description: "여성가족 장관상", organization: "전국 청소년국악경연회" },
    { icon: faTrophy, title: "전북대 콩쿨 성학부",  description: "동상", organization: "전북대학교 예술대학장" },
    { icon: faAward, title: "국민취업제도공모전",  description: "참여", organization: "고용노동부" },
    { icon: faAward, title: "국민 참여 청렴콘텐츠 공모전",  description: "참여", organization: "국민권익위원회" },
    ];

    const CertificationsAwardsSection = () => {
        return (
          <div className="Certifications_Awards-section">
            <div className="container">
              {/* <h5 className="heading_Ning">AWARD & LICENSE & CERTIFICATE</h5> */}
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div className="certification-item" key={index}>
                    <FontAwesomeIcon icon={cert.icon} className="cert-icon" />
                    <div className="cert-details">
                      <h3>{cert.title}</h3>
                      <p>{cert.description}</p>
                      {cert.organization && <p>{cert.organization}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      };
      
export default CertificationsAwardsSection;
