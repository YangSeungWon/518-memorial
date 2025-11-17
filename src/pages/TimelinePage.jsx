import { useState } from 'react';
import { Link } from 'react-router-dom';
import { timelineData } from '../data/timeline';

function TimelinePage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="page timeline-page">
      <h2>5·18 민주화운동 타임라인</h2>
      <p className="page-intro">
        1980년 5월 17일부터 27일까지, 광주에서 무슨 일이 있었는지 날짜별로
        상세하게 알아봅니다.
      </p>

      <div className="detailed-timeline-link">
        <Link to="/timeline/detailed" className="detailed-link-btn">
          시분 단위 세부 타임라인 보기
        </Link>
        <p>각 사건의 정확한 시간(시:분)까지 기록된 상세 타임라인을 확인하세요.</p>
      </div>

      <div className="timeline-container">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${expandedIndex === index ? 'expanded' : ''}`}
          >
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < timelineData.length - 1 && (
                <div className="marker-line"></div>
              )}
            </div>

            <div className="timeline-content">
              <div
                className="timeline-header"
                onClick={() => toggleExpand(index)}
              >
                <div className="timeline-date">{event.date}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-summary">{event.summary}</p>
                <button className="expand-button">
                  {expandedIndex === index ? '접기' : '자세히 보기'}
                </button>
              </div>

              {expandedIndex === index && (
                <div className="timeline-details">
                  <h4>상세 내용</h4>
                  <ul>
                    {event.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>

                  <div className="timeline-significance">
                    <h4>의의</h4>
                    <p>{event.significance}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="timeline-summary-section">
        <h3>요약</h3>
        <div className="summary-phases">
          <div className="phase">
            <h4>1단계: 시위 시작 (5/18-19)</h4>
            <p>학생 시위 시작, 공수부대의 과잉진압으로 시민 분노</p>
          </div>
          <div className="phase">
            <h4>2단계: 확산과 고립 (5/20)</h4>
            <p>택시·버스 기사 합류, 광주 외부와 단절</p>
          </div>
          <div className="phase">
            <h4>3단계: 발포와 무장 (5/21)</h4>
            <p>계엄군 집단 발포, 시민군 형성, 계엄군 철수</p>
          </div>
          <div className="phase">
            <h4>4단계: 시민 자치 (5/22-26)</h4>
            <p>자체 질서 유지, 협상 시도, 민주주의 실현</p>
          </div>
          <div className="phase">
            <h4>5단계: 최후 항전 (5/27)</h4>
            <p>상무충정작전, 도청 진압, 민주화 열망의 상징</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TimelinePage;
