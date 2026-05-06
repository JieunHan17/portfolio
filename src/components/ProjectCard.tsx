import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link }) => {
  return (
    <div style={{ 
      background: 'var(--card-bg)', 
      padding: 'var(--spacing-md)', 
      borderRadius: '12px',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}>
      <h3 style={{ color: 'var(--text-primary)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
        {tech.map(t => (
          <small key={t} style={{ 
            color: 'var(--accent-color)',
            background: 'var(--bg-secondary)',
            padding: '2px 8px',
            borderRadius: '4px',
            fontWeight: '600'
          }}>
            #{t}
          </small>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ 
        color: 'var(--accent-color)', 
        fontWeight: 'bold',
        display: 'inline-block'
      }}>
        View Details →
      </a>
    </div>
  );
};

export default ProjectCard;
