import { useState } from 'react';
import { factCheckData, commonMisconceptions } from '../data/factcheck';

function FactCheckPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const categories = [
    'all',
    ...new Set(factCheckData.map((item) => item.category)),
  ];

  const filteredData =
    selectedCategory === 'all'
      ? factCheckData
      : factCheckData.filter((item) => item.category === selectedCategory);

  const getVerdictClass = (verdict) => {
    if (verdict === '거짓') return 'verdict-false';
    if (verdict.includes('부분적')) return 'verdict-partial';
    return 'verdict-true';
  };

  return (
    <div className="page factcheck-page">
      <h2>팩트체크</h2>
      <p className="page-intro">
        5·18 민주화운동에 대한 잘못된 정보와 루머를 검증합니다. "이렇게
        말하는 사람이 있던데..."라고 들은 이야기가 있다면 여기서 확인해보세요.
      </p>

      <section className="category-filter">
        <h3>카테고리별 보기</h3>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? '전체' : category}
            </button>
          ))}
        </div>
      </section>

      <section className="factcheck-list">
        {filteredData.map((item) => (
          <div key={item.id} className="factcheck-item">
            <div
              className="factcheck-header"
              onClick={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
            >
              <div className="claim-section">
                <span className="claim-label">주장</span>
                <p className="claim-text">"{item.claim}"</p>
              </div>
              <div className={`verdict ${getVerdictClass(item.verdict)}`}>
                {item.verdict}
              </div>
            </div>

            {expandedId === item.id && (
              <div className="factcheck-details">
                <div className="explanation">
                  <h4>검증 결과</h4>
                  <p>{item.explanation}</p>
                </div>
                <div className="sources">
                  <h4>출처 (클릭하여 직접 확인)</h4>
                  <ul>
                    {item.sources.map((source, i) => (
                      <li key={i}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="source-link-item"
                        >
                          {source.name}
                        </a>
                        {source.description && (
                          <span className="source-description">
                            {' '}- {source.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="misconceptions-section">
        <h3>자주 묻는 질문</h3>
        <div className="misconceptions-list">
          {commonMisconceptions.map((item, index) => (
            <div key={index} className="misconception-item">
              <h4 className="question">{item.question}</h4>
              <p className="answer">{item.answer}</p>
              {item.sources && (
                <div className="misconception-sources">
                  <strong>참고:</strong>{' '}
                  {item.sources.map((source, i) => (
                    <span key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.name}
                      </a>
                      {i < item.sources.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="warning-section">
        <h3>가짜뉴스 주의</h3>
        <div className="warning-content">
          <p>
            5·18 관련 가짜뉴스는 주로 특정 웹사이트에서 시작되어 개인 블로그와
            유튜브를 통해 확산됩니다. 정보를 접할 때는 다음을 확인하세요:
          </p>
          <ul>
            <li>출처가 공식 기관인가? (정부 기관, 학술 기관, UNESCO 등)</li>
            <li>법원 판결이나 공식 조사 결과와 일치하는가?</li>
            <li>주장을 뒷받침하는 구체적인 증거가 있는가?</li>
            <li>다른 신뢰할 수 있는 출처에서도 같은 내용을 확인할 수 있는가?</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FactCheckPage;
