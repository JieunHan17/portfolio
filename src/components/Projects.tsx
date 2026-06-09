import React from 'react';
import ProjectCard from './ProjectCard';
import AdminDetail from './AdminDetail';
import AdmanagerDetail from './AdmanagerDetail';
import AdSDKDetail from './AdSDKDetail';

const Projects: React.FC = () => {
  const otherProjects = [
    { 
      title: 'Shopping Overlay Web App', 
      description: 'LG TV 내 쇼핑 광고 클릭 시 상품 정보를 오버레이로 보여주는 웹 애플리케이션 구현', 
      tech: ['Javascript', 'Enact', 'CSS'], 
      link: '#' 
    },
    { 
      title: 'LG Channels Web Backend API', 
      description: 'LG 채널 서비스의 웹 버전 지원을 위한 백엔드 API 설계 및 구현', 
      tech: ['Node.js', 'REST API'], 
      link: '#' 
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Featured Projects</h2>

        {/* Major Project Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <div className="reveal"><AdminDetail /></div>
          <div className="reveal"><AdmanagerDetail /></div>
          <div className="reveal"><AdSDKDetail /></div>
        </div>

        <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.25rem' }}>Other Contributions</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: 'var(--spacing-md)' 
        }}>
          {otherProjects.map((project, index) => (
            <div key={index} className="reveal">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
