import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';
import FactCheckPage from './pages/FactCheckPage';
import StatisticsPage from './pages/StatisticsPage';
import SourcesPage from './pages/SourcesPage';
import PlacesPage from './pages/PlacesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/factcheck" element={<FactCheckPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
