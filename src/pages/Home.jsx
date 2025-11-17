import { Link } from 'react-router-dom';
import { backgroundEvents } from '../data/timeline';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <h2>5·18 민주화운동이란?</h2>
        <p className="hero-text">
          1980년 5월 18일부터 27일까지 광주광역시(당시 광주시)와 전라남도
          지역에서 시민들이 신군부의 집권 음모를 규탄하고 민주주의를 쟁취하기
          위해 벌인 민주화 운동입니다.
        </p>
        <div className="hero-badges">
          <span className="badge">UNESCO 세계기록유산</span>
          <span className="badge">대한민국 민주화의 전환점</span>
        </div>
      </section>

      <section className="overview-section">
        <h3>왜 알아야 하나요?</h3>
        <div className="reason-cards">
          <div className="reason-card">
            <h4>역사적 의의</h4>
            <p>
              5·18은 한국 민주화 과정의 결정적 전환점입니다. 이 사건 이후 민주화
              운동이 본격화되었고, 1987년 민주화를 이끌어내는 원동력이
              되었습니다.
            </p>
          </div>
          <div className="reason-card">
            <h4>국제적 인정</h4>
            <p>
              2011년 UNESCO 세계기록유산에 등재되어 인류 공동의 기록유산으로
              인정받았습니다. 동아시아 민주화 운동의 모범 사례로 평가됩니다.
            </p>
          </div>
          <div className="reason-card">
            <h4>현재진행형</h4>
            <p>
              여전히 최초 발포명령자 등 미해결 과제가 남아있습니다. 또한 사실을
              왜곡하는 가짜뉴스가 계속 확산되고 있어 정확한 이해가 필요합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="background-section">
        <h3>역사적 배경</h3>
        <div className="background-timeline">
          {backgroundEvents.map((event, index) => (
            <div key={index} className="background-event">
              <div className="event-date">{event.date}</div>
              <div className="event-content">
                <h4>{event.event}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
          <div className="background-event highlight">
            <div className="event-date">1980년 5월 17일</div>
            <div className="event-content">
              <h4>비상계엄 전국 확대</h4>
              <p>5·18 민주화운동의 직접적 도화선</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-facts">
        <h3>핵심 사실</h3>
        <div className="facts-grid">
          <div className="fact-item">
            <div className="fact-number">10일</div>
            <div className="fact-label">항쟁 기간</div>
            <div className="fact-detail">1980.5.18 ~ 5.27</div>
          </div>
          <div className="fact-item">
            <div className="fact-number">606명</div>
            <div className="fact-label">공식 희생자</div>
            <div className="fact-detail">사망 165명 + 행불 65명 + 상이후 사망 376명</div>
          </div>
          <div className="fact-item">
            <div className="fact-number">2011년</div>
            <div className="fact-label">UNESCO 등재</div>
            <div className="fact-detail">세계기록유산</div>
          </div>
          <div className="fact-item">
            <div className="fact-number">4,271건</div>
            <div className="fact-label">등재 문서</div>
            <div className="fact-detail">+ 사진 1,733점, 필름 2,017컷</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h3>더 알아보기</h3>
        <div className="cta-cards">
          <Link to="/timeline" className="cta-card">
            <h4>상세 타임라인</h4>
            <p>5월 18일부터 27일까지 매일 무슨 일이 있었는지 자세히 알아보세요.</p>
          </Link>
          <Link to="/factcheck" className="cta-card">
            <h4>팩트체크</h4>
            <p>5·18에 대한 잘못된 정보와 루머를 검증합니다.</p>
          </Link>
          <Link to="/statistics" className="cta-card">
            <h4>통계와 기록</h4>
            <p>피해 규모와 법적 처리 과정을 확인하세요.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
