import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Javascript', 'Vanilla JS', 'Svelte', 'Vue.js', 'HTML5', 'CSS', 'react-dom', 'React Router', 'React Native', 'Vite']
    },
    {
      title: 'Languages & System',
      skills: ['C++', 'REST API']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Jenkins', 'Jira', 'Copilot', 'Markdown']
    },
    {
      title: 'Design & UX',
      skills: ['UI/UX', 'Figma']
    }
  ];

  const industryKnowledge = [
    '광고·마케팅', '방송·엔터테인먼트', '전자제품', '콘텐츠', '라이프스타일'
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', fontFamily: 'var(--font-mono)', fontSize: '2rem' }}>
          <span style={{ color: 'var(--term-green)' }}>$</span> ls -R ~/skills
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          {skillCategories.map((category) => (
            <div key={category.title} style={{
              background: 'var(--bg-secondary)',
              padding: 'var(--spacing-lg)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              fontFamily: 'var(--font-mono)'
            }}>
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: 'var(--spacing-md)', 
                color: 'var(--accent-color)'
              }}>
                ./{category.title.toLowerCase().replace(/ /g, '_')}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map(skill => (
                  <span key={skill} style={{ 
                    padding: '4px 8px', 
                    background: 'var(--bg-primary)', 
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
          <h2 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.8rem' }}>
            <span style={{ color: 'var(--term-green)' }}>$</span> check --domains
          </h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 'var(--spacing-md)', 
            justifyContent: 'center' 
          }}>
            {industryKnowledge.map(industry => (
              <span key={industry} style={{ 
                padding: '0.6rem 1.2rem', 
                background: 'var(--accent-color)', 
                color: 'white',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
