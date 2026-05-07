import React from 'react';

const AdSDKDetail: React.FC = () => {
  const contributions = [
    {
      title: '광고 표준(VAST) 검증 및 테스트 환경 구축',
      desc: '광고 파트너사의 데이터가 업계 표준 규격(VAST)을 준수하는지 사전에 검증할 수 있는 독립적인 테스트 환경 구축',
      details: [
        'VAST XML 유효성 검증 기능 SDK 추가',
        '광고 파트너 전용 독립 테스트 앱 환경 분리 및 구축',
        '핵심 모듈(광고 매니저, 에셋 관리자 등) 전반의 대규모 구조 개선',
        '광고 클릭 이벤트 처리 로직 버그 수정'
      ]
    },
    {
      title: '광고 투명성(Ad Transparency) 기능 구현',
      desc: '사용자에게 광고임을 명확히 알리기 위한 정보 표시 및 규제 준수 기능 개발',
      details: [
        '스폰서 텍스트(예: "Sponsored by") 표시 가이드 및 타이머 로직 구현',
        '광고 위 추가 텍스트 오버레이 기능 개발',
        'FTC 등 글로벌 광고 투명성 가이드라인 준수'
      ]
    },
    {
      title: '비디오 재생 및 보안 통신 이슈 해결',
      desc: 'TV 환경에서의 비디오 광고 자동 재생 최적화 및 보안 통신 표준 적용',
      details: [
        'HTTPS 프로토콜 누락으로 인한 통신 실패 버그 수정 (보안 표준 준수)',
        '특정 앱 환경의 비디오 재생 불가 이슈 해결',
        'TV UX에 최적화된 자동 재생(Autoplay) 로직 강제 적용으로 노출률 향상'
      ]
    },
    {
      title: '데이터 정합성 및 광고 노출 최적화',
      desc: '광고 성과 측정의 정확도 향상 및 기기 상태에 따른 유연한 광고 영역 관리',
      details: [
        '트래킹 이벤트 전송 순서 최적화로 광고 성과 지표(CTR 등) 신뢰도 확보',
        '기기 상태에 따른 광고 영역(Slot) 자동 보정 로직 구현',
        '광고 미노출 방지를 위한 방어적 프로그래밍 적용'
      ]
    }
  ];

  return (
    <div style={{ 
      background: 'var(--bg-primary)', 
      borderRadius: '16px', 
      padding: 'var(--spacing-lg)', 
      border: '1px solid var(--border-color)',
      marginBottom: 'var(--spacing-xl)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
    }}>
      <div style={{ borderBottom: '2px solid var(--bg-secondary)', paddingBottom: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ color: 'var(--accent-color)', margin: 0, fontSize: '1.8rem', fontFamily: 'var(--font-mono)' }}>
          Ad-SDK Core Development (Smart TV Ad System)
        </h2>
        <p style={{ fontWeight: '700', color: 'var(--text-primary)', marginTop: '8px', fontSize: '1.1rem' }}>
          SDK Developer | 2024.08 — 2025.03
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
          <p style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>C++, JavaScript, VAST Standard, Git</p>
        </div>
        <div>
          <small style={{ color: 'var(--text-secondary)', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>[contribution]</small>
          <p style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>Core Feature Dev & Bug Fixing</p>
        </div>
        <div>
          <small style={{ color: 'var(--text-secondary)', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>[key_scope]</small>
          <p style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>Ad Tech, VAST, CTV, Test Infra</p>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.4rem', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--term-green)' }}>$</span> cat sdk_contributions.log
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

export default AdSDKDetail;
