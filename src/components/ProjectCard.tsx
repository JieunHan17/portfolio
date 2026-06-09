import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link }) => {
  return (
    <div className="repo-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)' }}>
        <a href={link} style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{title}</a>
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: 'var(--spacing-md)' }}>
        {description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tech.map((t, i) => (
          <span key={i} className="badge">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
