import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '개요', icon: '📋' },
    { path: '/timeline', label: '타임라인', icon: '📅' },
    { path: '/factcheck', label: '팩트체크', icon: '✓' },
    { path: '/statistics', label: '통계', icon: '📊' },
    { path: '/sources', label: '출처', icon: '📚' },
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>5·18 민주화운동</h1>
            <span className="subtitle">기록과 진실</span>
          </Link>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-content">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="footer-content">
          <p>
            이 웹사이트는 5·18 민주화운동에 대한 정확한 정보 제공을 목적으로
            합니다.
          </p>
          <p>
            모든 정보는 공식 기록과 검증된 출처를 기반으로 작성되었습니다.
          </p>
          <p className="footer-note">
            UNESCO 세계기록유산 등재 (2011년 5월 25일)
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
