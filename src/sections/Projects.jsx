import "../styles/sections/Project.css";

import Masonry from "react-masonry-css";

import Rogram from "../assets/ROGRAM.png";
import Tr from "../assets/tr.png";
import MindComma from "../assets/mindcomma.png";
import EcoMong from "../assets/ecomong.png";
import Mz from "../assets/mz.png";
import StampMarble from "../assets/stampmarble.png";

import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  const projects = [
    {
      tittle: "로그램(ROGRAM)",
      intent: "로봇 제어 환경을 온라인에서 재현하는 학습 플랫폼",
      period: "2025.05 (약 1개월)",
      role: "3인 팀 / 기획 및 발표 담당",
      goal: "교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성",
      feachers:
        "멀티스레드 기반 핑퐁 로봇 제어 / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공",
      stack: ["React"],
      image: Rogram,
    },
    {
      tittle: "타래",
      intent: "디지털 소외 계층을 위한 음성 기반 택시 호출 앱",
      period: "2025.07 (약 1개월)",
      role: "3인 팀 / 기획 및 발표 담당",
      goal: "교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성",
      feachers:
        "멀티스레드 기반 핑퐁 로봇 제어 / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공",
      stack: ["React"],
      image: Tr,
    },
    {
      tittle: "MindComma",
      intent: "청소년을 위한 심리진단 및 위로 서비스",
      period: "2025.08 - 11 (약 4개월)",
      role: "3인 팀 / 기획 및 발표 담당",
      goal: "교육 격차를 해소하고, 누구나 양질의 교육을 받을 수 있는 환경 조성",
      feachers:
        "멀티스레드 기반 핑퐁 로봇 제어 / 센서 데이터 실시간 수집 및 응답 처리 / 예제 코드 및 테스트 환경 제공",
      stack: ["Java"],
      image: MindComma,
    },
    {
      tittle: "EcoMong",
      intent: "야생동물 생채 학습 및 보호 서비스",
      period: "2025.07 (약 1개월)",
      role: "기획 및 발표",
      goal: "",
      feachers: "",
      stack: ["React", "Python"],
      image: EcoMong,
    },
    {
      tittle: "맛집지도 MZ",
      intent: "사용자가 직접 추천하는 지도 기반 맛집 정보 공유 플랫폼",
      period: "2025.07 - 11 (약 4개월)",
      role: "기획 및 발표",
      goal: "",
      feachers: "",
      stack: ["React", "Supabase", "Vite", "JavaScript", "CSS"],
      image: Mz,
    },
    {
      tittle: "Stamp Marble",
      intent:
        "칭찬에 게임 요소를 더해 학생들의 긍정적인 행동을 스스로 이끌어내는 참여형 시스템",
      period: "2025.10 (약 1개월)",
      role: "기획 및 발표",
      goal: "",
      feachers: "",
      stack: ["React", "Supabase", "Vite", "JavaScript", "CSS"],
      image: StampMarble,
    },
  ];

  const breakpointColumns = {
    default: 3,
    1387: 2,
    907: 1,
  };

  return (
    <section className="career-section" id="career">
      <div className="career-header">
        <h1 className="career-h1">프로젝트</h1>
      </div>
      <div className="career-exp">
        <p>화면을 설계하는 단계부터, 기능 구현·테스트·배포까지 </p>
        <p>모든 과정을 직접 경험하며 실전 개발 역량을 다지고 있습니다.</p>
      </div>
      <div style={{ height: "100px" }}></div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="project-masonry"
        columnClassName="project-masonry-column"
      >
        {projects.map((project) => (
          <ProjectItem
            key={project.tittle}
            tittle={project.tittle}
            intent={project.intent}
            period={project.period}
            role={project.role}
            goal={project.goal}
            feachers={project.feachers}
            stack={project.stack}
            image={project.image}
          />
        ))}
      </Masonry>
    </section>
  );
}
