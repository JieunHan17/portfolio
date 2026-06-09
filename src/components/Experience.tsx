import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'LG전자',
      role: '연구원 | 광고플랫폼개발팀',
      period: '2022.07 ~ 재직 중',
      details: [
        <div key="admin" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span>BFF 구축을 통한 개발 병목 해결 및 Admin 페이지 풀스택 구현</span>
          <a href="#project-admin" className="badge badge-accent">detail</a>
        </div>,
        <div key="adsdk" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span>Ad-SDK Core Development 신규 요구사항 및 이슈 대응</span>
          <a href="#project-adsdk" className="badge badge-accent">detail</a>
        </div>,
        'Shopping Overlay 웹앱 구현',
        <div key="admanager" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span>admanager (webOS TV Ad System) 신규 요구사항 및 이슈 대응</span>
          <a href="#project-admanager" className="badge badge-accent">detail</a>
        </div>,
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
    <section id="experience">
      <div className="container">
        <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="repo-card reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{exp.company}</h3>
                  <p style={{ fontWeight: '600', margin: '4px 0', color: 'var(--text-primary)' }}>{exp.role}</p>
                </div>
                <span className="badge" style={{ fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
              </div>
              <ul style={{ marginTop: 'var(--spacing-md)' }}>
                {exp.details.map((detail, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{detail}</li>
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
