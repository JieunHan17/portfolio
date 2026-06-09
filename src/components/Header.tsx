import React from 'react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      background: 'var(--bg-primary)', 
      borderBottom: '1px solid var(--border-color)',
      zIndex: 1000,
      padding: '0 var(--spacing-md)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: 'var(--nav-height)',
        padding: 0
      }}>
        <div style={{ 
          fontWeight: '700', 
          fontSize: '1.2rem', 
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-color)'
        }}>
          ~/jieun_han
        </div>
        
        <nav style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 'var(--spacing-md)' 
        }}>
          <ul style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)',
            fontWeight: '500',
            fontSize: '0.9rem',
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}>
            <li style={{ padding: 0, margin: 0 }} className="nav-item">
              <a href="#about" style={{ color: 'var(--text-primary)', padding: '8px' }}>About</a>
            </li>
            <li style={{ padding: 0, margin: 0 }} className="nav-item">
              <a href="#experience" style={{ color: 'var(--text-primary)', padding: '8px' }}>Experience</a>
            </li>
            <li style={{ padding: 0, margin: 0 }} className="nav-item">
              <a href="#skills" style={{ color: 'var(--text-primary)', padding: '8px' }}>Skills</a>
            </li>
            <li style={{ padding: 0, margin: 0 }} className="nav-item">
              <a href="#projects" style={{ color: 'var(--text-primary)', padding: '8px' }}>Projects</a>
            </li>
          </ul>
          
          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginLeft: 'var(--spacing-sm)'
            }}
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </nav>
      </div>
      <style>{`
        .nav-item::before { content: none !important; }
        .nav-item a:hover { color: var(--accent-color) !important; text-decoration: none !important; }
      `}</style>
    </header>
  );
};

export default Header;
