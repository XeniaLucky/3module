import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Layout from './components/Layout/Layout';
import HomePage from './components/pages/HomePage';
import CardsPage from './components/pages/CardsPage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  return (
    <Router> 
      <>
        {isLoading && (
          <div className="loader">
            <div className="loader-inner">
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
            </div>
          </div>
        )}
        <Layout>
          <Routes> 
            <Route path="/" element={<HomePage />} /> 
            <Route path="/cards" element={<CardsPage />} /> 
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
        </Layout>
      </>
    </Router>
  );
}

export default App;