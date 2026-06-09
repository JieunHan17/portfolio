import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      minHeight: '70vh',
      background: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <div className="terminal-prompt">jieun@macbook ~ % whoami</div>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
            fontWeight: 800, 
            marginBottom: 'var(--spacing-md)',
            letterSpacing: '-0.02em'
          }}>
            한지은 <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>(Han Jieun)</span>
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            color: 'var(--accent-color)', 
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            &gt; Software Engineer
          </p>
          
          <div style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.7', 
            color: 'var(--text-primary)',
            maxWidth: '700px'
          }}>
            <p>
              시스템의 깊이와 사용자 경험의 섬세함을 잇는 <strong>5년차 소프트웨어 엔지니어</strong>입니다.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              LG전자 광고플랫폼 개발팀에서 webOS TV 시스템의 핵심 서비스를 구축하며,<br />
              C++ 기반의 견고한 백엔드와 직관적인 React 프론트엔드를 넘나드는 기술적 유연함을 길러왔습니다.
            </p>
          </div>

          <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-md)' }}>
            <div className="badge badge-accent" style={{ padding: '6px 12px', fontSize: '14px' }}>Full-stack</div>
            <div className="badge" style={{ padding: '6px 12px', fontSize: '14px' }}>C++</div>
            <div className="badge" style={{ padding: '6px 12px', fontSize: '14px' }}>React</div>
            <div className="badge" style={{ padding: '6px 12px', fontSize: '14px' }}>Kotlin</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
