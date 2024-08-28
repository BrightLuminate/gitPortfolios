import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const SkillCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1;
`;

const SkillBar = styled.div`
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const SkillBarInner = styled.div`
  background: #2979ff;
  height: 10px;
  width: ${(props) => props.width || '0%'};
`;

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h5 className="heading_five">Skills</h5>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <SkillCard>
          <h2>CSS</h2>
          <CircularProgressbar value={90} text="90%" styles={buildStyles({ pathColor: '#2979FF' })} />
          <div className="progress-info">
            <p>28% Last week</p>
            <p>60% Last month</p>
          </div>
        </SkillCard>
        <SkillCard>
          <h2>HTML</h2>
          <CircularProgressbar value={80} text="80%" styles={buildStyles({ pathColor: '#2979FF' })} />
          <div className="progress-info">
            <p>28% Last week</p>
            <p>60% Last month</p>
          </div>
        </SkillCard>
        <SkillCard>
          <h2>jQuery</h2>
          <CircularProgressbar value={75} text="75%" styles={buildStyles({ pathColor: '#2979FF' })} />
          <div className="progress-info">
            <p>28% Last week</p>
            <p>60% Last month</p>
          </div>
        </SkillCard>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h5 className="heading_five">Other Skills</h5>
        <SkillBar>
          <SkillBarInner width="90%" />
          <span>React - 90%</span>
        </SkillBar>
        <SkillBar>
          <SkillBarInner width="85%" />
          <span>jQuery - 85%</span>
        </SkillBar>
        <SkillBar>
          <SkillBarInner width="95%" />
          <span>HTML5 - 95%</span>
        </SkillBar>
        <SkillBar>
          <SkillBarInner width="90%" />
          <span>CSS3 - 90%</span>
        </SkillBar>
        <SkillBar>
          <SkillBarInner width="70%" />
          <span>WordPress - 70%</span>
        </SkillBar>
        <SkillBar>
          <SkillBarInner width="80%" />
          <span>SEO - 80%</span>
        </SkillBar>
      </div>
    </div>
  );
};

export default SkillsSection;
