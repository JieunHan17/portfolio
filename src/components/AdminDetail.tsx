import React from 'react';

const AdminDetail: React.FC = () => {
  const contributions = [
    {
      title: '광고 운영 및 성과 시각화 (도메인 특화)',
      desc: '복잡한 광고 집행 데이터의 시각적 분석과 다단계 캠페인 관리 워크플로우 구현',
      details: [
        'ECharts 기반 인터랙티브 대시보드 및 Combo Chart 등 맞춤형 성과 리포트 차트 구현',
        '캠페인 생성부터 광고물 등록까지 다단계 프로세스를 Multi-step Form으로 설계 및 단계별 검증',
        '수십 개의 필터 조건 적용 시 뒤로가기 상태 복원 및 클라이언트 캐싱을 통한 UX 개선'
      ]
    },
    {
      title: '기술적 깊이 및 성능 최적화 (FE 핵심)',
      desc: '대용량 데이터 처리 및 컴포넌트 렌더링 최적화를 통한 사용자 경험 향상',
      details: [
        '@tanstack/react-virtual을 활용한 대용량 데이터 테이블 렌더링 (윈도잉 기법 적용)',
        'Redux Toolkit 기반 전역/로컬 상태 분리 및 100개 이상 컴포넌트 메모이제이션(useMemo 등) 적용',
        '불필요한 API 호출 최소화 및 sessionStorage/secure-ls 기반 상태 보존'
      ]
    },
    {
      title: '인증·권한 제어 및 아키텍처 (FE+BE 연동)',
      desc: '보안 요구사항을 충족하는 권한 기반 접근 제어(RBAC) 종단 구현',
      details: [
        'Spring Security + JWT 기반 백엔드 인증 체계 및 Redux 기반 프론트엔드 권한 상태 연동',
        '운영자 권한에 따른 읽기/쓰기 권한 제어 및 UI 버튼/API 접근 분기 처리',
        'API 스키마 변경 시 프론트/백엔드 동시 대응 및 민감 동작에 대한 Confirm 방어 로직 구현'
      ]
    },
    {
      title: '백엔드 비즈니스 로직 및 최적화 (Kotlin/Spring)',
      desc: '광고 도메인의 핵심 비즈니스 로직 처리 및 서버 성능 개선',
      details: [
        '캠페인, 광고 소재, 재고 도메인의 비즈니스 로직(목표값 합산, 검증 통일 등) 처리 및 결함 해결',
        'AdLine 등록 시 Zone 검색 속도 개선 등 DB 쿼리 및 응답 성능 튜닝',
        'Spring Mail 기반 리포트 자동 발송 및 Apache POI 기반 엑셀 리포트 생성 로직 개발'
      ]
    },
    {
      title: 'BFF 구축 및 주도적 API 개선을 통한 협업 최적화',
      desc: '프론트엔드 요구사항에 맞춘 백엔드 API 직접 수정 및 개발 병목 해결',
      details: [
        '프론트엔드 구현에 필요한 데이터 구조를 확보하기 위해 백엔드 API 로직을 직접 수정·보완하여 프론트-백엔드 간 개발 병목을 주도적으로 해결',
        'BFF(Backend for Frontend) 구조를 활용하여 클라이언트 요구사항에 최적화된 API 응답 정의 및 통신 효율 개선',
        'Springdoc-OpenAPI(Swagger)를 활용하여 백엔드 개발자와의 API 규격 동기화 및 문서화 작업 병행'
      ]
    },
    {
      title: '디자인 에이전시 및 실무팀과의 긴밀한 소통',
      desc: '와이어프레임 개선부터 실무자 피드백 반영까지 사용자 중심의 개발 수행',
      details: [
        '외부 디자인 에이전시(아메바)와 소통하며 Figma 와이어프레임의 논리적 오류나 UX 미비점(Edge Case)을 사전에 발견하여 기술적으로 보완된 UI 제안',
        '실제 운영 어드민을 사용하는 광고 운영팀과 직접 소통하며 실무자의 페인 포인트(Pain Point) 및 신규 요구사항을 수집하여 기능에 반영',
        'MUI 기반의 공통 컴포넌트 라이브러리 구축으로 기획·디자인 요구사항에 대한 신속한 대응 체계 마련'
      ]
    }
  ];

  return (
    <div id="project-admin" className="repo-card" style={{ padding: 'var(--spacing-lg)' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <span className="badge">Full-stack</span>
        <span className="badge badge-accent">200M+ Global Active Users</span>
        <span className="badge">260M+ webOS Devices</span>
      </div>
      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '8px' }}>
          LG Ad Platform - 운영 어드민 (풀스택)
        </h3>
        <p style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '8px' }}>
          Full-stack Developer (Frontend & Backend) | 2025.07 — 진행 중
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
          광고 플랫폼(LG Ad Platform)의 광고 운영·성과 리포팅 어드민을 프론트엔드와 백엔드 양쪽으로 직접 개발하여 
          화면부터 API, DB 연동까지 End-to-End 기능을 단독으로 완결한 프로젝트입니다.
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
          <div className="terminal-prompt" style={{ fontSize: '0.8rem', opacity: 0.7 }}>tech_stack_fe</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>React 19, Redux, ECharts</p>
        </div>
        <div>
          <div className="terminal-prompt" style={{ fontSize: '0.8rem', opacity: 0.7 }}>tech_stack_be</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>Kotlin, Spring Boot, JPA</p>
        </div>
        <div>
          <div className="terminal-prompt" style={{ fontSize: '0.8rem', opacity: 0.7 }}>key_scope</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>Full-stack E2E, Vis</p>
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

      <div style={{ marginTop: 'var(--spacing-xl)' }}>
        <h4 style={{ 
          fontSize: '1.2rem', 
          marginBottom: 'var(--spacing-md)', 
          borderBottom: '1px solid var(--border-color)', 
          paddingBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ color: 'var(--term-yellow)' }}>⚠</span> Technical Challenge & Resolution
        </h4>
        <div className="repo-card" style={{ background: 'rgba(255, 189, 46, 0.03)', borderColor: 'rgba(255, 189, 46, 0.2)' }}>
          <h5 style={{ marginBottom: '12px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            대규모 광고 데이터 테이블의 인터랙션 성능 최적화
          </h5>
          <div style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <p>
              <strong>Problem:</strong> 수천 개의 광고 데이터를 표로 시각화하여 대량의 리스트를 보여줄 때, <strong>표 내부에 포함된 체크박스 선택이나 드롭다운 조작 시 약 1~2초 이상의 눈에 띄는 딜레이(UI Jank)</strong>가 발생하는 성능 이슈를 발견했습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>Analysis:</strong> React의 렌더링 원리상, 테이블 전체를 포함하는 상위 상태가 변경될 때마다 하위의 모든 행(Row) 컴포넌트가 동시에 리렌더링되면서 메인 스레드 부하가 발생하는 것이 원인이었습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>Solution:</strong> 
              <ul style={{ marginTop: '8px' }}>
                <li><strong>Windowing 도입:</strong> <code>@tanstack/react-virtual</code>을 적용하여 현재 화면에 보이는 20~30개의 행만 실제 DOM에 렌더링하도록 구조를 변경했습니다.</li>
                <li><strong>Rendering Optimization:</strong> 체크박스와 드롭다운을 독립된 컴포넌트로 분리하고 <code>React.memo</code>를 적용하여, 특정 행의 상태가 바뀌어도 다른 행은 영향을 받지 않도록 최적화했습니다.</li>
              </ul>
            </p>
            <p style={{ marginTop: '12px', color: 'var(--success-color)', fontWeight: '600' }}>
              <strong>Result:</strong> 데이터 양에 관계없이 모든 인터랙션 응답 속도를 100ms 이내로 단축시켜, 대규모 광고 물량 운영 시에도 쾌적한 작업 환경을 제공했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetail;
