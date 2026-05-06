import React from 'react';
import ProjectCard from './ProjectCard';
import AdmanagerDetail from './AdmanagerDetail';

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
    { 
      title: 'Ad SDK Integration', 
      description: 'webOS TV 광고 생태계 확장을 위한 신규 SDK 요구사항 분석 및 연동 이슈 대응', 
      tech: ['C++', 'Javascript'], 
      link: '#' 
    },
  ];

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Featured Projects</h2>
        
        {/* Major Project Detail */}
        <AdmanagerDetail />

        <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Other Contributions</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
