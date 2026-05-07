import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'LG전자',
      role: '연구원 | 광고플랫폼개발팀',
      period: '2022.07 ~ 재직 중',
      details: [
        '광고 운영 Admin 페이지 프론트엔드 구현',
        <span key="adsdk" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          Ad-SDK Core Development 신규 요구사항 및 이슈 대응
          <a href="#project-adsdk" style={{ 
            color: 'var(--accent-color)', 
            textDecoration: 'none', 
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 10px',
            borderRadius: '6px',
            background: 'rgba(255, 118, 117, 0.05)',
            border: '1px solid rgba(255, 118, 117, 0.2)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 118, 117, 0.12)';
            e.currentTarget.style.border = '1px solid var(--accent-color)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 118, 117, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 118, 117, 0.05)';
            e.currentTarget.style.border = '1px solid rgba(255, 118, 117, 0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            [ detail ]
          </a>
        </span>,
        'Shopping Overlay 웹앱 구현',
        <span key="admanager" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          admanager (webOS TV Ad System) 신규 요구사항 및 이슈 대응
          <a href="#project-admanager" style={{ 
            color: 'var(--accent-color)', 
            textDecoration: 'none', 
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 10px',
            borderRadius: '6px',
            background: 'rgba(255, 118, 117, 0.05)',
            border: '1px solid rgba(255, 118, 117, 0.2)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 118, 117, 0.12)';
            e.currentTarget.style.border = '1px solid var(--accent-color)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 118, 117, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 118, 117, 0.05)';
            e.currentTarget.style.border = '1px solid rgba(255, 118, 117, 0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            [ detail ]
          </a>
        </span>,
        'LG채널 웹버전 백엔드 API 구현'
      ]
    },
    {
      company: 'KT',
      role: '인턴 | AI2XL연구소 XR/Vision AI P-TF XR',
      period: '2021.12 ~ 2022.02',
      details: [
        '약 10개의 메타버스 서비스 분석 및 인사이트 도출',
        'GAN, VAE 관련 학습',
        '3D 텍스처링 자동화(TM-NET) 관련 논문 학습 및 오픈소스 실행'
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--term-green)' }}>$</span> history | grep "work"
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{ 
              background: 'var(--bg-primary)', 
              padding: 'var(--spacing-lg)', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>{exp.company}</h3>
                  <p style={{ fontWeight: '700', margin: '4px 0', color: 'var(--text-primary)' }}>{exp.role}</p>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>[{exp.period}]</span>
              </div>
              <ul style={{ marginTop: 'var(--spacing-md)', paddingLeft: '1.2rem', listStyle: 'square' }}>
                {exp.details.map((detail, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.95rem' }}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
