import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: 'Languages',
      skills: ['C++', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL']
    },
    {
      category: 'Frontend',
      skills: ['React 19', 'Redux Toolkit', 'ECharts', '@tanstack/react-virtual', 'MUI', 'Emotion', 'Vite']
    },
    {
      category: 'Backend',
      skills: ['Spring Boot 3.4', 'JPA', 'MySQL', 'Redis', 'Spring Security', 'JWT', 'Flyway']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'Luna Service', 'GLib', 'VAST Standard', 'REST API']
    }
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Skills</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          {skillGroups.map((group, index) => (
            <div key={index} className="repo-card reveal" style={{ padding: 'var(--spacing-md)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)', color: 'var(--accent-color)' }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill, i) => (
                  <span key={i} className="badge badge-accent">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
