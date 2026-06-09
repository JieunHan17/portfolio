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
    <div id="project-admanager" className="repo-card" style={{ padding: 'var(--spacing-lg)' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <span className="badge badge-accent">200M+ Global Active Users</span>
        <span className="badge">260M+ webOS Devices</span>
        <span className="badge">Global Privacy Compliance</span>
      </div>
      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '8px' }}>
          admanager (webOS TV Ad System)
        </h3>
        <p style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '8px' }}>
          Core Developer | 2022.10 — 2025.09
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--spacing-md)', 
        marginBottom: 'var(--spacing-lg)',
        padding: 'var(--spacing-md)',
        background: 'var(--bg-secondary)',
        borderRadius: '6px'
      }}>
        <div>
          <div className="terminal-prompt" style={{ fontSize: '0.8rem', opacity: 0.7 }}>tech_stack</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>C++, Luna Service, GLib</p>
        </div>
        <div>
          <div className="terminal-prompt" style={{ fontSize: '0.8rem', opacity: 0.7 }}>contribution</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>Core Logic & API Dev</p>
        </div>
        <div>
          <div className="terminal-prompt" style={{ fontSize: '0.8rem', opacity: 0.7 }}>key_scope</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>Privacy, Stability</p>
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
          Key Contributions
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
          {contributions.map((item, idx) => (
            <div key={idx}>
              <h5 style={{ color: 'var(--accent-color)', marginBottom: '8px', fontSize: '1rem' }}>{item.title}</h5>
              <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--text-primary)', fontWeight: '500' }}>{item.desc}</p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {item.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmanagerDetail;
