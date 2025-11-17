import {
  officialSources,
  legalDocuments,
  academicResearch,
  internationalRecognition,
  furtherReading,
} from '../data/sources';

function SourcesPage() {
  return (
    <div className="page sources-page">
      <h2>출처와 참고자료</h2>
      <p className="page-intro">
        이 웹사이트의 모든 정보는 아래의 공식 기관과 검증된 출처를 기반으로
        작성되었습니다. 직접 확인하고 더 깊이 알아보세요.
      </p>

      <section className="official-sources">
        <h3>공식 기관 자료</h3>
        <div className="sources-grid">
          {officialSources.map((source, index) => (
            <div key={index} className="source-card">
              <div className="source-type">{source.type}</div>
              <h4>{source.name}</h4>
              <p>{source.description}</p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                방문하기
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="legal-documents">
        <h3>법률 및 판결문</h3>
        <div className="documents-list">
          {legalDocuments.map((doc, index) => (
            <div key={index} className="document-item">
              <div className="doc-year">{doc.year}년</div>
              <div className="doc-content">
                <h4>{doc.name}</h4>
                <p>{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="international-section">
        <h3>국제적 인정</h3>
        <div className="recognition-list">
          {internationalRecognition.map((item, index) => (
            <div key={index} className="recognition-item">
              <h4>{item.organization}</h4>
              <div className="recognition-details">
                <div className="recognition-type">{item.recognition}</div>
                <div className="recognition-year">{item.year}</div>
              </div>
              <p>{item.significance}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="academic-section">
        <h3>학술 연구 및 조사 보고서</h3>
        <div className="research-list">
          {academicResearch.map((research, index) => (
            <div key={index} className="research-item">
              <h4>{research.title}</h4>
              <div className="research-meta">
                <span className="author">{research.author}</span>
                <span className="year">{research.year}</span>
              </div>
              <p>{research.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="further-reading">
        <h3>추천 도서</h3>
        <div className="books-list">
          {furtherReading.map((book, index) => (
            <div key={index} className="book-item">
              <h4>{book.title}</h4>
              <div className="book-author">{book.author}</div>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-to-verify">
        <h3>정보 검증 방법</h3>
        <div className="verification-guide">
          <p>5·18에 대한 정보를 접할 때, 다음을 확인하세요:</p>
          <ol>
            <li>
              <strong>공식 기관 확인</strong>
              <p>국가기록원, 5·18기념재단, 민주화운동기념사업회 등 공식 기관의 자료인지 확인</p>
            </li>
            <li>
              <strong>법원 판결 확인</strong>
              <p>대법원 판결문과 일치하는지 확인</p>
            </li>
            <li>
              <strong>UNESCO 기록물 확인</strong>
              <p>세계기록유산에 등재된 원본 자료와 대조</p>
            </li>
            <li>
              <strong>복수 출처 확인</strong>
              <p>하나의 출처만 믿지 말고 여러 신뢰할 수 있는 출처에서 교차 검증</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="contact-info">
        <h3>더 알아보기</h3>
        <div className="contact-cards">
          <div className="contact-card">
            <h4>5·18기념재단</h4>
            <p>5·18 민주화운동 관련 가장 포괄적인 자료 제공</p>
            <p>전화: 062-360-0518</p>
          </div>
          <div className="contact-card">
            <h4>국립5·18민주묘지</h4>
            <p>희생자 추모 및 역사 교육 프로그램</p>
            <p>전화: 062-268-0518</p>
          </div>
          <div className="contact-card">
            <h4>5·18민주화운동기록관</h4>
            <p>UNESCO 등재 기록물 열람 및 전시</p>
            <p>주소: 광주광역시 동구 금남로 221</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SourcesPage;
