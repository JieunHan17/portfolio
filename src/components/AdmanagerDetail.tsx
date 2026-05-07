import React from 'react';

const AdmanagerDetail: React.FC = () => {
  const contributions = [
    {
      title: 'GDPR CMP Native 구현 (2025.04 ~ 2025.06)',
      desc: '유럽 GDPR 규정 준수를 위한 Consent Management Platform(CMP) 네이티브 연동 설계 및 구현',
      details: [
        'CAdProcessCMPNative 클래스 설계 (싱글톤 패턴)',
        'TCF(Transparency & Consent Framework) 문자열 저장/조회 및 만료 계산',
        '시스템 서비스 연동을 통한 조건부 앱 실행/종료 로직 구현',
        '주요 기능에 대한 유닛 테스트 작성'
      ]
    },
    {
      title: '청소년 보호 시스템 (2024.05 ~ 2024.12)',
      desc: '프랑스/이탈리아 Youth Protection 규제 대응을 위한 보호자 제어 기능 전체 설계 및 구현',
      details: [
        'CAdParentalControl 클래스 설계 및 구현',
        '국가별 연령 등급 시스템 및 다국어 팝업 로직 적용',
        '파일 기반 상태 영속화 및 실시간 설정 반영',
        '다양한 엣지 케이스를 포함한 유닛 테스트 커버리지 확보'
      ]
    },
    {
      title: 'AD SDK 연동 API 설계 및 개발 (2023.10 ~ 2024.03)',
      desc: '외부 광고 SDK와 admanager 간 통신을 위한 Luna Service API 세트 설계 및 구현',
      details: [
        'createContextWithTrackingList, getAdRequestInfo 등 핵심 API 개발',
        'GAsyncQueue를 활용한 일관된 메시지 큐 아키텍처 적용',
        'Handler-Interface-Core 3계층 구조 준수'
      ]
    },
    {
      title: '광고 ID(IFA) 관리 및 파서 구현 (2023.05)',
      desc: '프라이버시 설정에 따른 식별자 제공 로직 및 확장형 배너 파서 개발',
      details: [
        'LMT, DNS 등 사용자 설정에 따른 True ID/Session ID 분기 처리',
        'VAST 파싱 로직 확장을 통한 Expandable Banner 지원',
        'AsyncQueue 우선순위 재배치 알고리즘 구현'
      ]
    }
  ];

  return (
    <div id="project-admanager" style={{ 
      background: 'var(--bg-primary)', 
      borderRadius: '16px', 
      padding: 'var(--spacing-lg)', 
      border: '1px solid var(--border-color)',
      marginBottom: 'var(--spacing-xl)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
    }}>
      <div style={{ borderBottom: '2px solid var(--bg-secondary)', paddingBottom: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ color: 'var(--accent-color)', margin: 0, fontSize: '1.8rem', fontFamily: 'var(--font-mono)' }}>
          admanager (webOS TV Ad System)
        </h2>
        <p style={{ fontWeight: '700', color: 'var(--text-primary)', marginTop: '8px', fontSize: '1.1rem' }}>
          Core Developer | 2022.10 — 2025.09
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: 'var(--spacing-md)', 
        marginBottom: 'var(--spacing-lg)', 
        background: 'var(--bg-secondary)', 
        padding: 'var(--spacing-md)', 
        borderRadius: '12px'
      }}>
        <div>
          <small style={{ color: 'var(--text-secondary)', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>[tech_stack]</small>
          <p style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>C++, luna-service2, GLib, libcurl, GTest</p>
        </div>
        <div>
          <small style={{ color: 'var(--text-secondary)', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>[contribution]</small>
          <p style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>Core Logic & Feature Implementation</p>
        </div>
        <div>
          <small style={{ color: 'var(--text-secondary)', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>[key_scope]</small>
          <p style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>Privacy, SDK API, System Stability</p>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.4rem', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--term-green)' }}>$</span> cat key_contributions.log
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
          {contributions.map((item, idx) => (
            <div key={idx} style={{ 
              padding: 'var(--spacing-md)', 
              background: 'var(--bg-secondary)', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              transition: 'transform 0.2s ease'
            }}>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px', fontSize: '1.1rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '12px', color: 'var(--text-primary)', fontWeight: '500' }}>{item.desc}</p>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-secondary)', listStyle: 'square' }}>
                {item.details.map((d, i) => <li key={i} style={{ marginBottom: '6px' }}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmanagerDetail;
