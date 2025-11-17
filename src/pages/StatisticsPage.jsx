import {
  casualtyStatistics,
  unescoRecords,
  legalActions,
  unresolvedIssues,
} from '../data/statistics';

function StatisticsPage() {
  return (
    <div className="page statistics-page">
      <h2>통계와 기록</h2>
      <p className="page-intro">
        5·18 민주화운동의 피해 규모, 법적 처리 과정, 그리고 국제적 인정에 대한
        공식 통계와 기록입니다.
      </p>

      <section className="casualties-section">
        <h3>피해 규모</h3>
        <div className="statistics-cards">
          {Object.values(casualtyStatistics).map((stat, index) => (
            <div key={index} className="stat-card">
              <h4>{stat.title}</h4>
              <div className="total-number">
                총 <span className="highlight">{stat.total.toLocaleString()}</span>명
              </div>
              <ul className="breakdown-list">
                {stat.breakdown.map((item, i) => (
                  <li key={i}>
                    <span className="category">{item.category}</span>
                    <span className="count">{item.count.toLocaleString()}명</span>
                  </li>
                ))}
              </ul>
              <p className="stat-note">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="unesco-section">
        <h3>UNESCO 세계기록유산</h3>
        <div className="unesco-info">
          <div className="unesco-header">
            <div className="registration-date">
              등재일: <strong>{unescoRecords.registrationDate}</strong>
            </div>
          </div>

          <div className="unesco-numbers">
            <div className="unesco-stat">
              <div className="number">{unescoRecords.totalDocuments.toLocaleString()}</div>
              <div className="label">문서 (권)</div>
            </div>
            <div className="unesco-stat">
              <div className="number">{unescoRecords.totalFilms.toLocaleString()}</div>
              <div className="label">필름 (컷)</div>
            </div>
            <div className="unesco-stat">
              <div className="number">{unescoRecords.totalPhotos.toLocaleString()}</div>
              <div className="label">사진 (점)</div>
            </div>
          </div>

          <div className="unesco-categories">
            <h4>등재된 기록물 종류</h4>
            <ol>
              {unescoRecords.categories.map((category, i) => (
                <li key={i}>{category}</li>
              ))}
            </ol>
          </div>

          <div className="unesco-significance">
            <h4>역사적 의의</h4>
            <ul>
              {unescoRecords.significance.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h3>법적 처리 과정</h3>
        <div className="legal-timeline">
          {legalActions.map((action, index) => (
            <div key={index} className="legal-item">
              <div className="legal-year">{action.year}</div>
              <div className="legal-content">
                <h4>{action.event}</h4>
                <p>{action.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="unresolved-section">
        <h3>미해결 과제</h3>
        <p className="section-intro">
          40년이 지났지만 여전히 밝혀지지 않은 진실이 있습니다.
        </p>
        <div className="unresolved-grid">
          {unresolvedIssues.map((issue, index) => (
            <div key={index} className="unresolved-item">
              <div className="issue-header">
                <h4>{issue.issue}</h4>
                <span className={`status status-${issue.status === '미규명' ? 'unknown' : 'investigating'}`}>
                  {issue.status}
                </span>
              </div>
              <p>{issue.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="key-figures">
        <h3>주요 책임자 법적 판결</h3>
        <div className="figures-info">
          <p>
            대법원은 다음 인물들을 5·18 민주화운동의 진압 책임자로 판시했습니다:
          </p>
          <ul className="responsible-list">
            <li><strong>전두환</strong> - 내란죄 및 내란목적살인죄</li>
            <li><strong>노태우</strong> - 내란죄</li>
            <li><strong>정호용</strong> - 특전사령관</li>
            <li><strong>이희성</strong> - 계엄사령관</li>
            <li><strong>황영시</strong> - 육군참모차장</li>
            <li><strong>주영복</strong> - 국방부장관</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StatisticsPage;
