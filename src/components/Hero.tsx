import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '85vh',
      background: 'var(--bg-secondary)'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="traffic-light red"></div>
            <div className="traffic-light yellow"></div>
            <div className="traffic-light green"></div>
            <div style={{ marginLeft: 'auto', fontSize: '0.8rem', opacity: 0.5 }}>jieun — zsh — 80×24</div>
            <div style={{ marginLeft: 'auto' }}></div>
          </div>
          <div className="terminal-body">
            <div>
              <span className="prompt">jieun@macbook ~ %</span>
              <span className="command">whoami</span>
            </div>
            <div style={{ marginTop: '10px', color: 'var(--term-text)' }}>
              <h1 style={{ fontSize: '2.5rem', margin: '15px 0', color: '#fff' }}>한지은 (Han Jieun)</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--term-green)' }}>&gt; Software Engineer</p>
            </div>
            
            <div style={{ marginTop: '25px' }}>
              <span className="prompt">jieun@macbook ~ %</span>
              <span className="command">cat intro.txt</span>
            </div>
            <div style={{ marginTop: '10px', lineHeight: '1.8', color: '#ccc' }}>
              시스템의 깊이와 사용자 경험의 섬세함을 잇는 5년차 소프트웨어 엔지니어입니다.<br />
              LG전자 광고플랫폼 개발팀에서 webOS TV 시스템의 핵심 서비스를 구축하며,<br />
              C++ 기반의 견고한 백엔드와 직관적인 React 프론트엔드를 넘나드는 기술적 유연함을 길러왔습니다.
            </div>

            <div style={{ marginTop: '25px' }}>
              <span className="prompt">jieun@macbook ~ %</span>
              <span className="command">ls -l capabilities</span>
              <div className="cursor"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
