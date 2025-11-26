import "./Navbar.css";
import lsy from "../../assets/이서영 초성.png";

import { act, useState } from "react";
function Navbar() {
  const [active, setActive] = useState(null);
  const actives = ["skills", "career", "projects", "velog"];

  return (
    <nav className="nav-wrapper">
      {/* 상단 네비바 */}
      <div className="nav-row nav-top">
        <a href="#intro" onClick={() => setActive(true)}>
          <img src={lsy} alt="이서영 초성 로고" className="nav-logo" />
        </a>
        <a
          href="#skills"
          className={active === "skills" ? "nav-item active" : "nav-item"}
          onClick={() => setActive("skills")}
        >
          기술
        </a>
        <a
          href="#career"
          className={active === "career" ? "nav-item active" : "nav-item"}
          onClick={() => setActive("career")}
        >
          경력
        </a>
        <a
          href="#projects"
          className={active === "projects" ? "nav-item active" : "nav-item"}
          onClick={() => setActive("projects")}
        >
          프로젝트
        </a>
        <a
          href="#velog"
          className={active === "velog" ? "nav-item active" : "nav-item"}
          onClick={() => setActive("velog")}
        >
          블로그
        </a>
      </div>

      {/* 하단 네비바
      <div className="nav-row nav-bottom">
        <a href="#education" className="nav-item small">
          교육 및 자격증
        </a>

        <a href="#footer" className="nav-item small">
          마무리
        </a>
      </div> */}
    </nav>
  );
}

export default Navbar;
