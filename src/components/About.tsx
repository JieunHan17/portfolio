import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--term-green)' }}>#</span> about.me
          </h2>
          <div style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)', 
            lineHeight: '1.8',
            borderLeft: '4px solid var(--accent-color)',
            paddingLeft: 'var(--spacing-lg)'
          }}>
            <p>
              복잡한 글로벌 프라이버시 규제를 시스템 로직으로 녹여내고, 
              보이지 않는 곳의 효율이 사용자에게는 최상의 경험으로 전달되도록 코드로 증명합니다.
            </p>
            <p style={{ marginTop: 'var(--spacing-md)' }}>
              지난 5년 간, 임베디드 시스템 서비스부터 모던 웹 애플리케이션까지 
              다양한 레이어를 경험하며 <strong>'문제의 본질을 해결하는 기술'</strong>에 집중해 왔습니다. 
              하드웨어에 가까운 저수준 프로그래밍에서 얻은 성능 최적화 감각과 
              사용자 중심의 프론트엔드 개발 역량을 결합하여, 
              안정적이면서도 아름다운 서비스를 만드는 것을 즐깁니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
