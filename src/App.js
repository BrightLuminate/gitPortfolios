import React from 'react';
import './css/App.css';
import MyComponent from './components/Mycomponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import BlogDetail from './components/BlogDetail';
import CertificationsAwards from './components/CertificationsAwards'; // Updated to PascalCase

function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<MyComponent />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/certifications-awards" element={<CertificationsAwards />} />
      </Routes>
    </Router>
  );
}

export default App;
