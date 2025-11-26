import "./project.css";

import CIcon from "../assets/C.svg";
import CSSIcon from "../assets/CSS.svg";
import FigmaIcon from "../assets/Figma.svg";
import GithubIcon from "../assets/Github-Light.svg";
import HTMLIcon from "../assets/HTML.svg";
import JavaIcon from "../assets/Java-Dark.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import PythonIcon from "../assets/Python-Light.svg";
import ReactLightIcon from "../assets/React-Light.svg";
import SupabaseIcon from "../assets/Supabase-Dark.svg";
import ViteIcon from "../assets/Vite-Light.svg";
import IllustratorIcon from "../assets/Illustrator.svg";
import PhotoshopIcon from "../assets/Photoshop.svg";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1 className="projects-title">프로젝트</h1>
      </div>
      <p>
        다양한 프로젝트를 통해<br />
        실전 경험과 문제 해결 능력을 키워왔습니다.
      </p>
      <hr></hr>


      <div className="projects-list">
        <div className="project-item">
          {/*-----로그램------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>

          {/*-----포스처온------- */}
          <div className="project-item">
          <h4 className="project-name">포스처온 (Postureon)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 자세 불균형 문제를 해결하고, 건강한 생활 습관을 유도하는 스마트 헬스케어 솔루션 개발</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05 - 06 (약 2개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 1인팀 / 자료 조사 및 기획</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 장시간 앉아서 공부하는 학생 및 직장인을 대상으로, 센서 기반 자세 분석 + 교정 기능이 포함된 스마트 의자 설계</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 무게/각도 센서 기반 실시간 자세 분석, AI 맞춤형 알림, 진동 피드백, 앱 연동 스트레칭 영상 제공, 모션데스크 연동</p>
          </div>
           {/* <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div> */}
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 혼자서 기획부터 기술 연동, 발표 자료 작성까지 모든 과정을 주도하며 
            창업 아이디어를 실제 아이템으로 구체화하는 경험을 했다.
            선배들에게 직접 발표하고 피드백을 받는 과정을 통해 생각하지 못했던 문제점과 개선 방향을 발견했고, 
            그 덕분에 더욱 완성도 높은 기획서를 완성할 수 있었다.
            창업이 단순한 아이디어 제안이 아닌, 실제 사용자의 니즈를 파악하고 
            현실적인 시장성과 기술 구현 가능성을 고민해야 한다는 걸 깊이 깨달았다.</p>
          </div>
        </div>

        {/*-----원터치 수납형 바퀴 캐리어------- */}
        <h4 className="project-name">원터치 수납형 바퀴 캐리어</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 수하물 파손 및 짐 수납 시 불편함을 개선한, 실용적이고 튼튼한 스마트 캐리어 개발</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05 - 06 (약 2개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong>  2인 팀 / 제품 기획, 디자인, 기술 구조 설계</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 흔들림, 파손, 중량 초과 등의 실생활 문제를 해결하기 위한 캐리어 개선 아이디어 구현</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 원터치 수납형 바퀴 구조 (레버 + 스프링 + 슬라이드 레일 방식) / 비행기 바퀴를 참고한 강력한 하중 분산 구조/ 무게 측정 센서 내장 (캐리어 하단), 앞면 디스플레이로 실시간 무게 표시 / 버튼 위치 및 스크린 구성은 사용자 경험을 고려한 직관적 배치</p>
          </div>
           {/* <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div> */}
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이 프로젝트는 단순한 아이디어가 아니라, 내가 실생활에서 불편함을 직접 경험하며 느낀 문제에서 출발했다.
            기숙사에서 짐을 쌀 때마다 캐리어 바퀴가 흔들리고, 
            공항에서도 종종 바퀴가 부서지는 걸 보면서 “내가 진짜 필요한 걸 만들자”는 생각이 들었기 때문이다.
            기존 캐리어 구조를 분석하고, 실제 비행기 바퀴와 프레임 구조까지 조사하면서 
            실용성과 내구성을 동시에 잡는 방법을 고민하게 됐고, 
            이를 팀원과 함께 기획하고 도식화하는 과정에서 실제 문제 해결형 제품 기획의 재미와 성취감을 느낄 수 있었다.
            기술적인 도전도 많았지만, 그만큼 아이디어를 실현해가는 과정이 얼마나 중요한지 깨닫게 된 값진 경험이었다.
</p>
          </div>

          {/*-----타래 - 음성 기반 택시 호출 서비스------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>



          {/*-----MindComma  - 청소년을 위한 심리진단 및 위로 서비스------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>



          {/*-----EcoMong - 야생동물 생채 학습 및 보호 서비스------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>


          {/*-----마음건강의 첫 걸음, 나를 아는 것  - 자살예방 인포그래픽------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>




          {/*-----우리만을 위한 맛집 - MZ------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>


          {/*-----모두를 위한 맛집 웹앱 - M4Eat------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>



          {/*-----칭찬으로 세계여행까지! - Stamp Marble------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>




          {/*-----AI를 활용한 전동킥보드 헬멧 유무 확인 서비스------- */}
          <h4 className="project-name">로그램(ROGRAM)</h4>
          <div className="project-goal">
            <p><strong>프로젝트 목표 : </strong> 교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성</p>
          </div>
           <div className="project-period">
            <p><strong>기간 : </strong> 2025.05(약 1개월)</p>
          </div>
           <div className="project-team-role">
            <p><strong>팀 구성 및 역할 : </strong> 3인 팀 / 기획 및 발표 담당</p>
          </div>
           <div className="project-purpose">
            <p><strong>프로젝트 목적 : </strong> 유엔 지속가능발전목표(SDGs)를 바탕으로, 
            장소나 나이에 상관없이 로봇 실습을 통해 
            코딩을 배울 수 있는 온라인 교육 플랫폼 개발</p>
          </div>
           <div className="project-features">
            <p><strong>주요 기능 : </strong> 멀티스레드 기반 핑퐁 로봇 제어
            / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공</p>
          </div>
           <div className="project-stack">
            <p><strong>사용 툴 : </strong> 리액트</p>
            <img src={ReactLightIcon} alt="React Icon" />
          </div>
           <div className="project-learnings">
            <p><strong>배운 점 및 느낀 점 : </strong> 이번 프로젝트를 통해 교육 불평등을 
            기술로 해결할 수 있다는 가능성을 느꼈다. 단순한 코딩 교육이 아니라,
            누구나 양질의 교육을 받을 수 있는 환경을 만드는 것의 가치를 배웠다. 
            또한 팀원들과의 협업 속에서 각자의 강점을 살린 역할 분담의 중요성을 깨달았다. 
            짧은 기간 동안 진행된 프로젝트였지만, 한계점을 분석하고 해결방안을 제시하는 과정을 통해문제를 비판적으로 바라보는 시각과 발표력을 함께 성장시킬 수 있었다.</p>
          </div>











        </div>
      </div>
    </section>
  );
}