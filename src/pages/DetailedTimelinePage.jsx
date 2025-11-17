import { useState } from 'react';
import { detailedTimelineData, detailedTimelineSources } from '../data/detailedTimeline';

function DetailedTimelinePage() {
  const [selectedDate, setSelectedDate] = useState('all');

  const filteredData =
    selectedDate === 'all'
      ? detailedTimelineData
      : detailedTimelineData.filter((day) => day.date === selectedDate);

  return (
    <div className="detailed-timeline-page">
      <header className="page-header">
        <h1>세부 타임라인</h1>
        <p>5·18 민주화운동 시분 단위 상세 기록 (1980년 5월 17일~27일)</p>
      </header>

      <div className="date-filter">
        <button
          className={`filter-btn ${selectedDate === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedDate('all')}
        >
          전체
        </button>
        {detailedTimelineData.map((day) => (
          <button
            key={day.date}
            className={`filter-btn ${selectedDate === day.date ? 'active' : ''}`}
            onClick={() => setSelectedDate(day.date)}
          >
            {day.date.replace('1980년 ', '')}
          </button>
        ))}
      </div>

      <div className="detailed-timeline">
        {filteredData.map((day) => (
          <div key={day.date} className="day-section">
            <div className="day-header">
              <h2>{day.date}</h2>
              <span className="day-title">{day.title}</span>
            </div>

            <div className="events-list">
              {day.events.map((event, index) => (
                <div key={index} className="event-item">
                  <div className="event-time">
                    <span className="time-badge">{event.time}</span>
                  </div>
                  <div className="event-description">
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sources-section">
        <h3>출처</h3>
        <p className="sources-note">
          본 타임라인은 다음 공식 자료들을 종합하여 작성되었습니다. 각 출처를 클릭하여 원본 자료를 직접 확인할 수 있습니다.
        </p>
        <ul className="sources-list">
          {detailedTimelineSources.map((source, index) => (
            <li key={index}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                {source.name}
              </a>
              <span className="source-desc"> - {source.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="timeline-note">
        <h3>참고사항</h3>
        <ul>
          <li>
            시간 기록은 여러 사료를 교차 검증하여 작성되었으나, 일부 시간은 사료에 따라 차이가 있을 수 있습니다.
          </li>
          <li>
            "새벽", "오후", "저녁" 등으로 표기된 경우는 정확한 시분이 확인되지 않은 사건입니다.
          </li>
          <li>
            더 상세한 기록은 위 출처들의 원본 자료를 참고하시기 바랍니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailedTimelinePage;
