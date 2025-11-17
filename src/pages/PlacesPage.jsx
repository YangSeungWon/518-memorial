import { useState } from 'react';
import { memorialPlaces, placeCategories } from '../data/places';

function PlacesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPlaces =
    selectedCategory === 'all'
      ? memorialPlaces
      : memorialPlaces.filter((place) => place.category === selectedCategory);

  return (
    <div className="places-page">
      <header className="page-header">
        <h1>기념공간 및 사적지</h1>
        <p>5·18 민주화운동을 기억하고 기리는 장소들</p>
      </header>

      <div className="category-filter">
        {placeCategories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="places-grid">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="place-card">
            <div className="place-header">
              <span className="place-category">{place.category}</span>
              {place.siteNumber && (
                <span className="site-number">사적지 제{place.siteNumber}호</span>
              )}
            </div>

            <h3 className="place-name">{place.name}</h3>

            <div className="place-info">
              <div className="info-item">
                <span className="info-label">주소</span>
                <span className="info-value">{place.address}</span>
              </div>

              <div className="info-item description">
                <span className="info-label">설명</span>
                <p className="info-value">{place.description}</p>
              </div>

              {place.hours && (
                <div className="info-item">
                  <span className="info-label">운영시간</span>
                  <span className="info-value">{place.hours}</span>
                </div>
              )}

              {place.tel && (
                <div className="info-item">
                  <span className="info-label">연락처</span>
                  <a href={`tel:${place.tel}`} className="info-value tel-link">
                    {place.tel}
                  </a>
                </div>
              )}

              {place.website && (
                <div className="info-item">
                  <span className="info-label">웹사이트</span>
                  <a
                    href={place.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-value website-link"
                  >
                    방문하기
                  </a>
                </div>
              )}

              {place.features && place.features.length > 0 && (
                <div className="info-item features">
                  <span className="info-label">주요 시설</span>
                  <div className="features-list">
                    {place.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="place-actions">
              <a
                href={`https://map.naver.com/v5/search/${encodeURIComponent(place.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                지도에서 보기
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="places-note">
        <h3>참고사항</h3>
        <ul>
          <li>광주광역시에는 총 32곳의 5·18 사적지가 지정되어 있습니다.</li>
          <li>
            사적지 방문 시 해당 장소의 역사적 의미를 존중해 주시기 바랍니다.
          </li>
          <li>
            운영시간은 변경될 수 있으니 방문 전 확인하시기 바랍니다.
          </li>
          <li>
            더 많은 사적지 정보는{' '}
            <a
              href="https://518.org/base/road/place/list?type=0&menuLevel=3&menuNo=6"
              target="_blank"
              rel="noopener noreferrer"
            >
              5·18기념재단
            </a>
            에서 확인할 수 있습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlacesPage;
