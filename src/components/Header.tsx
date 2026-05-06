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
        padding: 0 /* Use container padding or header padding */
      }}>
        <div style={{ 
          fontWeight: '700', 
          fontSize: '1.2rem', 
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-color)',
          whiteSpace: 'nowrap'
        }}>
          ~/jieun_han
        </div>
        
        <nav style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 'var(--spacing-lg)' 
        }}>
          <ul style={{ 
            display: 'flex', 
            gap: 'var(--spacing-lg)', /* Increased gap */
            fontWeight: '600',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.95rem',
            margin: 0,
            padding: 0
          }}>
            <li>
              <a href="#about" style={{ color: 'var(--text-primary)', padding: '8px 4px' }}>ABOUT</a>
            </li>
            <li>
              <a href="#experience" style={{ color: 'var(--text-primary)', padding: '8px 4px' }}>EXP</a>
            </li>
            <li>
              <a href="#skills" style={{ color: 'var(--text-primary)', padding: '8px 4px' }}>SKILLS</a>
            </li>
            <li>
              <a href="#projects" style={{ color: 'var(--text-primary)', padding: '8px 4px' }}>WORK</a>
            </li>
          </ul>
          
          <button 
            onClick={toggleTheme}
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: '700',
              fontFamily: 'var(--font-mono)',
              whiteSpace: 'nowrap'
            }}
          >
            {theme === 'light' ? 'DARK' : 'LIGHT'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
