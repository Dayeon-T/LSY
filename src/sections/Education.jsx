import "./Education.css";

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-header">
        <h1 className="education-title">교육 및 자격증</h1>
      </div>
      <p>
        방학이나 휴일을 활용하여<br />
        자격증이나 수료 과정을 통해 꾸준히 실력을 쌓아가고 있습니다.
      </p>
      <hr></hr>
      
      <h4 className="education-title">학력</h4>
      <div className="education-list">
        <div className="education-item">
          <p className="education-duration">2025.03-</p>
          <p className="education-institution">미림마이스터고등학교 재학 중 / 뉴미디어소프트웨어과</p>
        </div>
      </div>
        
      <h4 className="education-title">자격증</h4>
      <div className="education-list">
        <div className="education-item">
          <p className="education-duration">2023.03</p>
          <p className="education-institution">ITQ 아래한글 A</p>
        </div>
        <div className="education-item">
          <p className="education-duration">2023.03</p>
          <p className="education-institution">ITQ 파워포인트 A</p>
        </div>
        <div className="education-item">
          <p className="education-duration">2024.02</p>
          <p className="education-institution">ITQ 한글엑셀 B</p>
        </div>
      </div>


        <h4 className="education-title">수료 과정</h4>
      <div className="education-list">
        <div className="education-item">
          <p className="education-duration"> 2025.04~06</p>
          <p className="education-institution">공학도서관 ESG SCHOOL</p>
        </div>
        <div className="education-item">
          <p className="education-duration">2025.04~07</p>
          <p className="education-institution">공학도서관 AI 지니어스</p>
        </div>
        <div className="education-item">
          <p className="education-duration">2025.05</p>
          <p className="education-institution">한국과학창의재단 SW동행프로젝트</p>
        </div>
      </div>
    </section>

  );
}
