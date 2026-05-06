import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      padding: 'var(--spacing-lg) 0', 
      borderTop: '1px solid var(--border-color)',
      textAlign: 'center',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 한지은. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
