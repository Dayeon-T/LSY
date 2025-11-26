import "./Career.css";

const careerData = [
  {
    period: "2025.03 -",
    title: "미림마이스터고등학교 재학",
    subtitle: "뉴미디어소프트웨어과 1학년 2반",
    description:
      "프론트엔드 개발자로 성장하기 위해 미림마이스터고에 입학하였으며, 기초 프로그래밍부터 실전 프로젝트까지 체계적인 교육을 통해 개발 역량을 확립하는 중입니다.",
  },
  {
    period: "2025.03 - 07",
    title: "1-2반 부반장 임명",
    subtitle: "학급 운영 및 소통 담당",
    description:
      "초등학교부터 이어온 리더십 경험을 바탕으로 학급 행사 준비, 의견 조율, 교사-학생 간 소통을 지원하며 학급 분위기 형성과 자율 운영에 적극 기여했습니다.",
  },
  {
    period: "2025.03 -",
    title: "전공 동아리 ‘앱앤미’ 소속",
    subtitle: "교내·외 공모전 및 실전 프로젝트 중심 동아리 활동",
    description:
      "앱·웹 개발 중심 동아리로, 해커톤·공모전·외부 교육 프로그램에 참여하며 실전 개발 능력과 협업 능력을 강화했습니다. 프론트엔드 개발을 중심으로 다수 프로젝트를 수행했습니다.",
  },
  {
    period: "2025.05 - 06",
    title: "SW 동행 교육 수료",
    subtitle: "UN SDGs 기반 온라인 교육 플랫폼 제작 활동",
    description:
      "SDGs 중 ‘양질의 교육’과 ‘불평등 해소’를 주제로, 교육 접근성이 낮은 지역을 위한 온라인 교육 플랫폼을 기획·제작하며 개발의 사회적 역할을 고민한 의미 있는 프로젝트였습니다.",
  },

  /* --------------------------- AI · 교육 과정 --------------------------- */

  {
    period: "2025.04 - 07",
    title: "AI 지니어스 과정 수료",
    subtitle: "생성형 AI 및 파이썬 기초·활용 과정",
    description:
      "프롬프트 엔지니어링, 파이썬 기반 데이터 처리, 생성형 AI 도구 활용을 중심으로 한 3개월 과정 수료. AI 기반 프로젝트 기획 및 기능 설계 경험을 확장했습니다.",
  },
  {
    period: "2025.04 - 06",
    title: "ESG SCHOOL 수료",
    subtitle: "음성 인식·자연어 처리 기반 기술 교육",
    description:
      "음성 인식 모델 구조 및 환경 기반 AI의 활용 사례를 학습하며, AI와 지속가능성의 연계성을 경험한 프로그램입니다.",
  },
  {
    period: "2025.05 - 06",
    title: "창업 아이템 경진대회 참가",
    subtitle: "AI 기반 스마트 헬스케어 의자 개발",
    description:
      "센서와 AI를 결합해 사용자의 앉은 자세를 실시간 분석하고 교정해주는 헬스케어 의자를 개발. 문제 분석·아이디어 구체화·UI 설계 등 전반적인 제품 기획 과정을 경험했습니다.",
  },
  {
    period: "2025.06",
    title: "창의 아이디어 경진대회 참가",
    subtitle: "수납형 바퀴 캐리어 개발",
    description:
      "일상에서 느낀 불편을 해결하기 위한 아이디어로, 넓은 수납 구조와 편의성을 확보한 캐리어를 기획하며 생활형 제품 개발 경험을 쌓았습니다.",
  },


  {
    period: "2025.07 -",
    title: "소프트웨어 챌린지 참가",
    subtitle: "야생동물 보호 학습 앱 기획",
    description:
      "멸종위기 야생동물의 정보를 제공하고, 사용자가 생태 지식을 자연스럽게 학습할 수 있는 앱을 기획하며 UX 구조화 및 UI 흐름 설계를 직접 진행하였습니다.",
  },
  {
    period: "2025.08 - 09",
    title: "마음 챙김 공모전 참가",
    subtitle: "청소년 자살 예방 인포그래픽 제작",
    description:
      "청소년 정신건강 문제를 주제로 한 인포그래픽을 직접 제작하여 정보 전달의 시각화 방식과 공공 캠페인 디자인을 경험했습니다.",
  },
  {
    period: "2025.08 - 11",
    title: "교내 자바 프로젝트 진행",
    subtitle: "심리 진단 테스트 및 위로 콘텐츠 제공 프로그램",
    description:
      "자바 기반 심리 테스트 프로그램을 개발하며 파일 입출력, 클래스 설계, 예외 처리 등 객체지향 프로그래밍 기반의 실전 경험을 쌓았습니다.",
  },
  {
    period: "2025.10",
    title: "초록우산 감사편지 장려상 수상",
    subtitle: "헬멧 착용 여부 AI 인식 안전 시스템 제작",
    description:
      "전동 킥보드 이용자의 헬멧 착용 여부를 AI로 확인하는 시스템을 제작하여 안전한 주행 문화를 만드는 데 기여한 프로젝트로 장려상 수상.",
  },

  {
    period: "2025.10.24 - 25",
    title: "미림해커톤 참가",
    subtitle: "디지털시대 논리적 말하기 보조 웹앱 제작",
    description:
      "디지털세대의 말하기 습관 문제를 해결하기 위한 웹앱을 제작하여 2등 수상. 사용자 분석, 기능 설계, UI 제작, 프론트 구현까지 전 과정 참여.",
  },
  {
    period: "2025.11",
    title: "LG CNS AI 지니어스 소프트웨어 챌린지",
    subtitle: "헬멧 착용 유무 확인 웹앱 제작 – 우수상 수상",
    description:
      "YOLO 기반 객체 인식 기술을 활용하여 전동 킥보드 이용자의 안전을 보장하는 웹앱을 개발, 기술 활용성과 문제 해결력을 인정받아 우수상 수상.",
  },
  {
    period: "2025.11.03 - 24",
    title: "칭찬 시스템 웹사이트 제작",
    subtitle: "세계여행 콘셉트의 칭찬·마일리지 서비스 개발",
    description:
      "사용자가 ‘여행하듯’ 칭찬을 주고받는 인터랙티브 웹사이트 개발. React 기반 프론트엔드, 국가별 스탬프 시스템 등 감성적 UI/UX 설계에 집중했습니다.",
  },
  {
    period: "2025.11.26",
    title: "동아리 발표회",
    subtitle: "7개월간 준비한 맛집 추천 웹사이트 프로젝트 발표",
    description:
      "React + Supabase 기반 우리만의 맛집을 공유하는 웹사이트를 완성하여 발표. 지도 기반 검색, 영수증 인증 리뷰, 랜덤 추천 기능을 포함한 실전형 프로젝트였습니다.",
  }
];



export default function Career() {
  return (
    <section className="career-section" id="career">
      <div className="career-header">
        <div className="career-heading-en">Education &amp; Certifications</div>
        <div className="career-heading-ko">경력 및 경험</div>
      </div>

      <hr className="career-divider" />

      <div className="career-list">
        {careerData.map((item, index) => (
          <div className="career-item" key={index}>
            {/* 왼쪽 날짜 */}
            <div className="career-period">{item.period}</div>

            {/* 오른쪽 내용 */}
            <div className="career-content">
              <h3 className="career-title">{item.title}</h3>
              {item.subtitle && (
                <p className="career-subtitle">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="career-description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
